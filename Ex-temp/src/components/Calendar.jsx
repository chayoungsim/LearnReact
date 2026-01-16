import React, { useState, useMemo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import './calendar.css';
dayjs.locale('ko');

/**
 * 주간용 도넛 차트 (민트색)
 */
const WeeklyDonutChart = ({ percentage, text }) => {
    const size = 40; // 원 크기
    const strokeWidth = 3;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const safePercent = percentage || 0;
    const offset = circumference - (safePercent / 100) * circumference;

    return (
        <div className="weekly-donut-wrap">
            <svg width={size} height={size} className="weekly-donut">
                {/* 배경 원 (선택사항, 이미지엔 흐릿하게 없거나 투명) */}
                {/* <circle cx={size/2} cy={size/2} r={radius} stroke="rgba(255,255,255,0.2)" strokeWidth={strokeWidth} fill="none" /> */}

                {/* 진행 원 (민트색) */}
                {safePercent > 0 && (
                    <circle
                        stroke="#00E0C7" // 이미지의 민트색
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    />
                )}
            </svg>
            {/* 날짜 숫자 (중앙 정렬) */}
            <span className="weekly-date-num">{text}</span>
        </div>
    );
};

const WeeklyCalendar = () => {
    // 이미지와 동일하게 2025년 9월 16일(토)이 포함된 주를 기준
    const [currentDate, setCurrentDate] = useState(dayjs('2025-09-16'));
    const [selectedDate, setSelectedDate] = useState('2025-09-16');

    // 데이터 Mock (이미지 데이터 반영)
    const mockWeeklyData = {
        '2025-09-10': 100, // 일
        '2025-09-11': 0,   // 월 (데이터 없음)
        '2025-09-12': 100, // 화
        '2025-09-13': 100, // 수
        '2025-09-14': 75,  // 목 (일부)
        '2025-09-15': 65,  // 금 (일부)
        '2025-09-16': 100, // 토 (선택됨)
    };

    // 해당 주(Week)의 날짜들 생성 (일요일 시작)
    const weekDays = useMemo(() => {
        const startOfWeek = currentDate.startOf('week'); // 일요일
        const days = [];
        for (let i = 0; i < 7; i++) {
            days.push(startOfWeek.add(i, 'day'));
        }
        return days;
    }, [currentDate]);

    return (
        <div className="weekly-container">
            {/* 헤더 */}
            <div className="weekly-header">
                <div className="weekly-title">
                    {currentDate.format('YYYY.MM')} <span className="arrow-down">▼</span>
                </div>
                <button className="btn-report">주간 리포트</button>
            </div>

            {/* 요일 및 날짜 그리드 */}
            <div className="weekly-grid">
                {weekDays.map((dayItem) => {
                    const dateStr = dayItem.format('YYYY-MM-DD');
                    const isSelected = dateStr === selectedDate;
                    const percent = mockWeeklyData[dateStr];
                    const dayName = dayItem.format('ddd'); // 일, 월...

                    return (
                        <div
                            key={dateStr}
                            className={`weekly-day-col ${isSelected ? 'selected' : ''}`}
                            onClick={() => setSelectedDate(dateStr)}
                        >
                            {/* 요일 */}
                            <div className="weekly-day-name">{dayName}</div>

                            {/* 날짜 (도넛 차트 포함) */}
                            <div className="weekly-chart-area">
                                <WeeklyDonutChart percentage={percent} text={dayItem.date()} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WeeklyCalendar;