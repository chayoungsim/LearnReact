import React, { useState, useMemo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 로케일
import isoWeek from 'dayjs/plugin/isoWeek'; // 월요일 시작 플러그인
import './calendar.css';

// dayjs 설정
dayjs.extend(isoWeek);
dayjs.locale('ko');

/**
 * 도넛 차트 컴포넌트
 * @param {number} percentage - 퍼센트 (0~100)
 */
const DonutChart = ({ percentage }) => {
    const size = 44; // SVG 크기
    const strokeWidth = 3; // 선 두께
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    // 데이터가 없으면(null/undefined) 0 처리
    const safePercent = percentage || 0;
    const offset = circumference - (safePercent / 100) * circumference;

    // 색상 결정 (데이터가 있으면 파랑, 없으면 회색만)
    const isActive = safePercent > 0;

    return (
        <div className="donut-chart-wrap">
            <svg width={size} height={size} className="donut-chart">
                {/* 배경 회색 원 */}
                <circle
                    className="donut-bg"
                    stroke="#d1d1d6"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                {/* 진행 파란 원 */}
                {isActive && (
                    <circle
                        className="donut-progress"
                        stroke="#5F5AFF"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        r={radius}
                        cx={size / 2}
                        cy={size / 2}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round" // 끝부분 둥글게
                        transform={`rotate(-90 ${size / 2} ${size / 2})`} // 12시 방향 시작
                    />
                )}

                {/* 중앙 텍스트 */}
                {isActive && (
                    <text
                        x="50%"
                        y="50%"
                        dy="0.35em"
                        textAnchor="middle"
                        className="donut-text"
                    >
                        {/* 100일 때는 숫자만, 그 외에는 % 포함 (이미지 참고) */}
                        {safePercent === 100 ? (
                            <tspan className="text-num">{safePercent}%</tspan>
                        ) : (
                            <>
                                <tspan className="text-num">{safePercent}</tspan>
                                <tspan className="text-unit" dx="1">%</tspan>
                            </>
                        )}
                    </text>
                )}
            </svg>

        </div>
    );
};

const HealthCalendar = () => {
    // 현재 보고 있는 달력의 기준 날짜
    const [currentDate, setCurrentDate] = useState(dayjs());

    // 데이터 Mock (이미지의 날짜와 데이터 매핑)
    // 실제 사용시에는 API 데이터를 { 'YYYY-MM-DD': rate } 형태로 변환해서 쓰시면 됩니다.
    const mockData = {
        '2026-01-26': 0, // 2/26 (월) - 데이터 없음
        '2026-01-27': 100, // 예시
        '2026-01-31': 80, // 이미지 상단 31일 (실제 2월 말일인지 3월 31일인지 위치상 애매하나 로직대로 매핑)
        '2026-01-01': 100,
        '2026-03-02': 100,
        '2026-03-03': 80,
        '2026-03-04': 50,
        '2026-03-06': 100,
        '2026-03-07': 64,
    };

    // 달력 생성 로직 (월요일 시작 기준)
    const calendarDays = useMemo(() => {
        const startOfMonth = currentDate.startOf('month');
        const endOfMonth = currentDate.endOf('month');

        // 이 달의 시작일이 포함된 주의 월요일 찾기
        const startOfWeek = startOfMonth.startOf('isoWeek');
        // 이 달의 마지막일이 포함된 주의 일요일 찾기
        const endOfWeek = endOfMonth.endOf('isoWeek');

        const days = [];
        let day = startOfWeek;

        // 달력 그리드 채우기
        while (day.isBefore(endOfWeek) || day.isSame(endOfWeek, 'day')) {
            days.push(day);
            day = day.add(1, 'day');
        }
        return days;
    }, [currentDate]);

    // 핸들러
    const prevMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
    const nextMonth = () => setCurrentDate(currentDate.add(1, 'month'));

    return (
        <div className="calendar-container">
            {/* 헤더 */}
            <div className="calendar-header">
                <button onClick={prevMonth} className="nav-btn">
                    ◀
                </button>
                <h2 className="header-title">
                    {currentDate.format('YYYY.MM')}
                </h2>
                <button onClick={nextMonth} className="nav-btn">
                    ▶
                </button>
            </div>

            {/* 요일 헤더 (월요일 시작) */}
            <div className="weekdays-grid">
                {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                    <div key={day} className="weekday">{day}</div>
                ))}
            </div>

            {/* 날짜 그리드 */}
            <div className="days-grid">
                {calendarDays.map((dayItem) => {
                    const dateStr = dayItem.format('YYYY-MM-DD');
                    const percent = mockData[dateStr]; // 해당 날짜 데이터 조회

                    // 이번 달이 아닌 날짜 스타일 처리
                    const isCurrentMonth = dayItem.month() === currentDate.month();
                    const dayClass = isCurrentMonth ? 'day-cell' : 'day-cell not-current';

                    return (
                        <div key={dateStr} className={dayClass}>
                            <span className="day-number">{dayItem.date()}</span>
                            {/* 도넛 차트 */}
                            <DonutChart percentage={percent} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HealthCalendar;