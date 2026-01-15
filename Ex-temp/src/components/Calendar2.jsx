import React, { useState, useMemo, useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import '../calendar/calendar.css';

dayjs.locale('ko');

const RangeCalendar = () => {
    // 상태 관리
    const [viewDate, setViewDate] = useState(dayjs()); // 현재 보고 있는 달력의 기준 (년/월)
    const [startDate, setStartDate] = useState(dayjs()); // 시작일 (기본: 오늘)
    const [endDate, setEndDate] = useState(null); // 종료일
    const [isPickerOpen, setIsPickerOpen] = useState(false); // 년/월 선택 모달 상태

    // 년도/월 선택을 위한 데이터
    const years = useMemo(() => {
        const currentYear = dayjs().year();
        return Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);
    }, []);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    // 달력 그리드 생성
    const calendarDays = useMemo(() => {
        const startOfMonth = viewDate.startOf('month');
        const endOfMonth = viewDate.endOf('month');
        const startDay = startOfMonth.day(); // 0(일) ~ 6(토)

        const days = [];

        // 이전 달
        for (let i = 0; i < startDay; i++) {
            days.push({
                date: startOfMonth.subtract(startDay - i, 'day'),
                isCurrentMonth: false
            });
        }

        // 이번 달
        for (let i = 1; i <= viewDate.daysInMonth(); i++) {
            days.push({
                date: viewDate.date(i),
                isCurrentMonth: true
            });
        }

        // 다음 달
        const remaining = 7 - (days.length % 7);
        if (remaining < 7) {
            for (let i = 1; i <= remaining; i++) {
                days.push({
                    date: endOfMonth.add(i, 'day'),
                    isCurrentMonth: false
                });
            }
        }
        return days;
    }, [viewDate]);

    // 핸들러: 날짜 클릭 (범위 선택 로직)
    const handleDateClick = (dateObj) => {
        const clickedDate = dateObj.date;

        // 1. 시작일이 없거나, 이미 종료일까지 선택된 상태라면 -> 새로운 시작일로 설정
        if (!startDate || (startDate && endDate)) {
            setStartDate(clickedDate);
            setEndDate(null);
        }
        // 2. 종료일 선택 (시작일보다 뒤여야 함)
        else if (startDate && !endDate) {
            if (clickedDate.isBefore(startDate)) {
                setStartDate(clickedDate); // 시작일보다 앞을 찍으면 시작일을 변경
            } else {
                setEndDate(clickedDate);
            }
        }
    };

    // 핸들러: 월 이동
    const prevMonth = () => setViewDate(viewDate.subtract(1, 'month'));
    const nextMonth = () => setViewDate(viewDate.add(1, 'month'));

    // 핸들러: 단축 버튼 (1개월 후 등)
    const handleQuickSelect = (monthsToAdd) => {
        if (monthsToAdd === 0) {
            // 설정안함 (초기화)
            setStartDate(dayjs());
            setEndDate(null);
            return;
        }
        const baseDate = startDate || dayjs();
        const newEndDate = baseDate.add(monthsToAdd, 'month');

        setStartDate(baseDate);
        setEndDate(newEndDate);
        setViewDate(newEndDate); // 종료일이 있는 달로 이동
    };

    // 핸들러: 년/월 선택 변경
    const changeYear = (y) => setViewDate(viewDate.year(y));
    const changeMonth = (m) => setViewDate(viewDate.month(m - 1));

    return (
        <div className="range-calendar-container">
            {/* 상단 타이틀 */}
            <div className="range-top-info">
                <span className="info-label">목표 달성 기한</span>
                <span className="info-value">
          {startDate ? startDate.format('YYYY.MM.DD') : '설정안함'}
                    {endDate ? ` ~ ${endDate.format('YYYY.MM.DD')}` : ' 부터'}
        </span>
            </div>

            {/* 달력 헤더 */}
            <div className="range-header">
                <button onClick={prevMonth} className="range-nav-btn">‹</button>

                <div className="range-title" onClick={() => setIsPickerOpen(!isPickerOpen)}>
                    {viewDate.format('YYYY년 M월')}
                    <span className={`picker-arrow ${isPickerOpen ? 'open' : ''}`}>▼</span>
                </div>

                <button onClick={nextMonth} className="range-nav-btn">›</button>

                {/* 년/월 선택 오버레이 (Picker) */}
                {isPickerOpen && (
                    <div className="year-month-picker">
                        <div className="picker-col">
                            {years.map(y => (
                                <div
                                    key={y}
                                    className={`picker-item ${viewDate.year() === y ? 'active' : ''}`}
                                    onClick={() => changeYear(y)}
                                >
                                    {y}년
                                </div>
                            ))}
                        </div>
                        <div className="picker-col">
                            {months.map(m => (
                                <div
                                    key={m}
                                    className={`picker-item ${viewDate.month() + 1 === m ? 'active' : ''}`}
                                    onClick={() => { changeMonth(m); setIsPickerOpen(false); }}
                                >
                                    {m}월
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* 요일 헤더 */}
            <div className="range-weekdays">
                {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                    <div key={day} className={`weekday-cell ${idx === 0 ? 'sun' : idx === 6 ? 'sat' : ''}`}>
                        {day}
                    </div>
                ))}
            </div>

            {/* 날짜 그리드 */}
            <div className="range-days-grid">
                {calendarDays.map((item, idx) => {
                    const dateStr = item.date.format('YYYY-MM-DD');
                    const isStart = startDate && item.date.isSame(startDate, 'day');
                    const isEnd = endDate && item.date.isSame(endDate, 'day');
                    const isInRange = startDate && endDate && item.date.isAfter(startDate) && item.date.isBefore(endDate);
                    const isHoliday = item.date.day() === 0; // 일요일
                    const isSat = item.date.day() === 6; // 토요일

                    let classNames = 'range-day-cell';
                    if (!item.isCurrentMonth) classNames += ' not-current';
                    if (isStart || isEnd) classNames += ' selected';
                    if (isInRange) classNames += ' in-range';
                    if (isHoliday && !isStart && !isEnd) classNames += ' holiday-sun';
                    if (isSat && !isStart && !isEnd) classNames += ' holiday-sat';

                    return (
                        <div
                            key={idx}
                            className={classNames}
                            onClick={() => handleDateClick(item)}
                        >
                            <span className="day-text">{item.date.date()}</span>
                        </div>
                    );
                })}
            </div>

            {/* 하단 단축 버튼 */}
            <div className="range-bottom-buttons">
                <button
                    className={`quick-btn ${!endDate ? 'active-filled' : ''}`}
                    onClick={() => handleQuickSelect(0)}
                >
                    설정안함
                </button>
                <button className="quick-btn" onClick={() => handleQuickSelect(1)}>1개월 후</button>
                <button className="quick-btn" onClick={() => handleQuickSelect(3)}>3개월 후</button>
                <button className="quick-btn" onClick={() => handleQuickSelect(6)}>6개월 후</button>
            </div>
        </div>
    );
};

export default RangeCalendar;