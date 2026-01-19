// picker-init.js
import WheelPicker from './WheelPicker.js';

// 데이터 생성
const years = Array.from({ length: 50 }, (_, i) => 2000 + i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const hours = Array.from({ length: 24 }, (_, i) => i);
const minutes = Array.from({ length: 60 }, (_, i) => i);

// 선택 상태
const selected = {
    year: 2025,
    month: 1,
    day: 13,
    hour: 12,
    minute: 0
};

// 결과 업데이트
const updateDateResult = () => {
    document.getElementById('date-result').textContent =
        `${selected.year}년 ${selected.month}월 ${selected.day}일`;
};

const updateTimeResult = () => {
    document.getElementById('time-result').textContent =
        `${String(selected.hour).padStart(2, '0')}:${String(selected.minute).padStart(2, '0')}`;
};

// Picker 생성
new WheelPicker('year-picker', 'year-list', years, selected.year, value => {
    selected.year = value;
    updateDateResult();
});

new WheelPicker('month-picker', 'month-list', months, selected.month, value => {
    selected.month = value;
    updateDateResult();
});

new WheelPicker('day-picker', 'day-list', days, selected.day, value => {
    selected.day = value;
    updateDateResult();
});

new WheelPicker('hour-picker', 'hour-list', hours, selected.hour, value => {
    selected.hour = value;
    updateTimeResult();
});

new WheelPicker('minute-picker', 'minute-list', minutes, selected.minute, value => {
    selected.minute = value;
    updateTimeResult();
});
