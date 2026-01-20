import React, {useState, useEffect, useRef, useCallback} from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import './weightGoalPage.css';

dayjs.locale('ko');

const WeightInputPicker = ({ onClose, onAdd, initialWeight = 60.0 }) => {
    // 초기값 설정
    const [integerPart, setIntegerPart] = useState(Math.floor(initialWeight));
    const [decimalPart, setDecimalPart] = useState(Math.round((initialWeight % 1) * 10));
    const [currentTime, setCurrentTime] = useState(dayjs().format('A h:mm'));

    const intScrollRef = useRef(null);
    const decScrollRef = useRef(null);

    // 드래그 및 스크롤 상태 Ref
    const isDragging = useRef(false);
    const startY = useRef(0);
    const scrollTop = useRef(0);
    const ticking = useRef(false); // 렌더링 최적화용 플래그

    const integerRange = Array.from({ length: 171 }, (_, i) => 30 + i);
    const decimalRange = Array.from({ length: 10 }, (_, i) => i);
    const ITEM_HEIGHT = 40;

    // 초기 스크롤 위치 설정
    useEffect(() => {
        if (intScrollRef.current) {
            intScrollRef.current.scrollTop = integerRange.indexOf(integerPart) * ITEM_HEIGHT;
        }
        if (decScrollRef.current) {
            decScrollRef.current.scrollTop = decimalPart * ITEM_HEIGHT;
        }
    }, []);

    // [핵심] 스크롤 핸들러 최적화 (requestAnimationFrame 사용)
    const handleScroll = useCallback((e, type) => {
        if (!ticking.current) {
            const currentScrollTop = e.target.scrollTop;

            window.requestAnimationFrame(() => {
                const index = Math.round(currentScrollTop / ITEM_HEIGHT);

                if (type === 'int') {
                    if (integerRange[index] !== undefined) {
                        // 값이 실제 변했을 때만 상태 업데이트하여 렌더링 최소화
                        setIntegerPart(prev => prev !== integerRange[index] ? integerRange[index] : prev);
                    }
                } else {
                    if (decimalRange[index] !== undefined) {
                        setDecimalPart(prev => prev !== decimalRange[index] ? decimalRange[index] : prev);
                    }
                }
                ticking.current = false;
            });

            ticking.current = true;
        }
    }, [integerRange, decimalRange]);

    // --- 마우스 드래그 로직 (딜레이 방지) ---
    const onMouseDown = (e) => {
        isDragging.current = true;
        startY.current = e.pageY;
        scrollTop.current = e.currentTarget.scrollTop;

        // [중요] 클릭 즉시 스냅과 부드러운 이동을 해제하여 즉각 반응하도록 함
        e.currentTarget.style.cursor = 'grabbing';
        e.currentTarget.style.scrollSnapType = 'none';
        e.currentTarget.style.scrollBehavior = 'auto';
    };

    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const y = e.pageY;
        const walk = (y - startY.current) * 1.5; // 드래그 감도 조절 (1.5배 빠르게)
        e.currentTarget.scrollTop = scrollTop.current - walk;
    };

    const stopDragging = (e) => {
        if (!isDragging.current) return;
        isDragging.current = false;

        // 드래그 종료 시 다시 스냅 적용 (가까운 숫자에 착 붙도록)
        e.currentTarget.style.cursor = 'grab';
        e.currentTarget.style.scrollSnapType = 'y mandatory';
        e.currentTarget.style.scrollBehavior = 'smooth';
    };

    const handleAdd = () => {
        const finalWeight = parseFloat(`${integerPart}.${decimalPart}`);
        if (onAdd) onAdd(finalWeight);
    };

    return (
        <div className="picker-modal-overlay">
            <div className="picker-modal-container">
                <div className="picker-header">
                    <h3>몸무게 입력</h3>
                </div>

                <div className="picker-date-info">
                    <span className="label-today">오늘</span>
                    <span className="label-time">{currentTime}</span>
                </div>

                <div className="wheel-picker-wrapper">
                    <div className="highlight-bar"></div>

                    <div className="picker-columns">
                        {/* 정수 컬럼 */}
                        <div
                            className="wheel-column"
                            ref={intScrollRef}
                            onScroll={(e) => handleScroll(e, 'int')}
                            onMouseDown={onMouseDown}
                            onMouseLeave={stopDragging}
                            onMouseUp={stopDragging}
                            onMouseMove={onMouseMove}
                        >
                            <div className="padding-dummy"></div>
                            {integerRange.map((num) => (
                                <div key={num} className={`wheel-item ${num === integerPart ? 'active' : ''}`}>
                                    {num}
                                </div>
                            ))}
                            <div className="padding-dummy"></div>
                        </div>

                        {/* 소수 컬럼 */}
                        <div
                            className="wheel-column"
                            ref={decScrollRef}
                            onScroll={(e) => handleScroll(e, 'dec')}
                            onMouseDown={onMouseDown}
                            onMouseLeave={stopDragging}
                            onMouseUp={stopDragging}
                            onMouseMove={onMouseMove}
                        >
                            <div className="padding-dummy"></div>
                            {decimalRange.map((num) => (
                                <div key={num} className={`wheel-item decimal ${num === decimalPart ? 'active' : ''}`}>
                                    .{num}
                                </div>
                            ))}
                            <div className="padding-dummy"></div>
                        </div>

                        <div className="unit-label">kg</div>
                    </div>
                </div>

                <div className="picker-footer">
                    <button className="btn-cancel" onClick={onClose}>취소</button>
                    <button className="btn-add" onClick={handleAdd}>추가</button>
                </div>
            </div>
        </div>
    );
};

export default WeightInputPicker;