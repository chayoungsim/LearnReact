/**
 * Main Calendar Script
 * ES6 Module Import 방식
 */

import RangeCalendar from './rangeCalendar.js';
import RegularCalendar from './regularCalendar.js';

/**
 * 전체 캘린더 초기화
 */
function initCalendars() {
    // Range Calendar 초기화
    RangeCalendar.init();
    
    // Regular Calendar 초기화
    RegularCalendar.init();
    
    console.log('Calendars initialized successfully');
}

/**
 * 전체 캘린더 파괴
 */
function destroyCalendars() {
    RangeCalendar.destroy();
    RegularCalendar.destroy();
    
    console.log('Calendars destroyed successfully');
}

// DOM 로드 완료 후 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalendars);
} else {
    initCalendars();
}

// Export for external use
export { RangeCalendar, RegularCalendar, initCalendars, destroyCalendars };
