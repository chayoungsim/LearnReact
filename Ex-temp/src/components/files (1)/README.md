# Calendar Module - ES6 방식

ES6 모듈 형식으로 구현된 Range Calendar와 Regular Calendar입니다.

## 📁 파일 구조

```
├── index.html              # 메인 HTML 파일
├── main.js                 # 메인 진입점 (모듈 import)
├── rangeCalendar.js        # Range Calendar 모듈
├── regularCalendar.js      # Regular Calendar 모듈
└── README.md              # 이 파일
```

## 🚀 사용법

### 1. 기본 사용 (HTML에서 자동 초기화)

```html
<!-- HTML 파일에 포함 -->
<script type="module" src="main.js"></script>
```

페이지 로드 시 자동으로 두 캘린더가 초기화됩니다.

### 2. JavaScript에서 모듈 Import

#### 방법 1: Default Export 사용
```javascript
import RangeCalendar from './rangeCalendar.js';
import RegularCalendar from './regularCalendar.js';

// 초기화
RangeCalendar.init();
RegularCalendar.init();

// 현재 날짜 가져오기
const rangeDate = RangeCalendar.getCurrentDate();
console.log(rangeDate); // { year: 2026, month: 1 }

// 월 변경
RangeCalendar.changeMonth(1); // 다음 달
RangeCalendar.changeMonth(-1); // 이전 달

// 특정 년월로 변경
RangeCalendar.setYearMonth(2025, 12);

// 캘린더 파괴
RangeCalendar.destroy();
```

#### 방법 2: Named Export 사용
```javascript
import { 
    initRangeCalendar,
    renderRangeDays,
    changeRangeMonth,
    setRangeYearMonth,
    getRangeCurrentDate
} from './rangeCalendar.js';

// 초기화
initRangeCalendar();

// 특정 년월 렌더링
renderRangeDays(2026, 3);

// 상태 조회
const currentDate = getRangeCurrentDate();
```

### 3. 브라우저 콘솔에서 사용

```javascript
// 전역 객체로 노출됨 (index.html에 설정되어 있음)
window.RangeCalendar.setYearMonth(2025, 6);
window.RegularCalendar.changeMonth(1);
```

## 📦 Export된 함수들

### Range Calendar Module

**Default Export:**
```javascript
{
    init: initRangeCalendar,
    destroy: destroyRangeCalendar,
    render: renderRangeDays,
    updateTitle: updateRangeTitle,
    changeMonth: changeRangeMonth,
    setYearMonth: setRangeYearMonth,
    getCurrentDate: getRangeCurrentDate
}
```

**Named Exports:**
- `initRangeCalendar()` - 초기화
- `destroyRangeCalendar()` - 파괴
- `renderRangeDays(year, month)` - 날짜 렌더링
- `updateRangeTitle(year, month)` - 타이틀 업데이트
- `changeRangeMonth(delta)` - 월 변경 (-1: 이전달, 1: 다음달)
- `setRangeYearMonth(year, month)` - 특정 년월로 설정
- `getRangeCurrentDate()` - 현재 날짜 상태 반환

### Regular Calendar Module

**Default Export:**
```javascript
{
    init: initRegularCalendar,
    destroy: destroyRegularCalendar,
    render: renderRegularDays,
    updateTitle: updateRegularTitle,
    changeMonth: changeRegularMonth,
    setYearMonth: setRegularYearMonth,
    getCurrentDate: getRegularCurrentDate
}
```

**Named Exports:**
- `initRegularCalendar()` - 초기화
- `destroyRegularCalendar()` - 파괴
- `renderRegularDays(year, month)` - 날짜 렌더링
- `updateRegularTitle(year, month)` - 타이틀 업데이트
- `changeRegularMonth(delta)` - 월 변경
- `setRegularYearMonth(year, month)` - 특정 년월로 설정
- `getRegularCurrentDate()` - 현재 날짜 상태 반환

## 🎯 주요 기능

### 1. Year/Month Picker
- 타이틀 클릭 시 년/월 선택 picker 표시
- 현재 년도 기준 ±10년 선택 가능
- 1월~12월 선택 가능
- 선택 시 즉시 적용 및 자동 닫힘
- 외부 클릭 시 picker 닫힘

### 2. 독립적인 모듈
- 각 캘린더가 독립적으로 동작
- 상태 관리 분리
- 이벤트 리스너 관리

### 3. 메모리 관리
- `destroy()` 함수로 이벤트 리스너 제거
- 페이지 전환 시 메모리 누수 방지

## 🔧 커스터마이징

### 날짜 셀 커스터마이징 예시

```javascript
// rangeCalendar.js의 renderRangeDays 함수 수정
export function renderRangeDays(year, month, options = {}) {
    const { 
        highlightDates = [],  // 강조할 날짜들
        eventDates = {}       // 이벤트가 있는 날짜들
    } = options;
    
    // 커스텀 로직 추가...
}
```

### 테마 적용 예시

```javascript
import RangeCalendar from './rangeCalendar.js';

// 초기화 후 커스텀 설정
RangeCalendar.init();
document.querySelector('.range-calendar-container').classList.add('dark-theme');
```

## 📝 Notes

- **ES6 모듈 지원 브라우저**: Chrome 61+, Firefox 60+, Safari 11+, Edge 16+
- **로컬 테스트**: 파일 프로토콜(`file://`)에서는 CORS 정책으로 인해 모듈이 작동하지 않을 수 있습니다. 로컬 서버 사용 권장.
- **dayjs 의존성**: dayjs 라이브러리가 먼저 로드되어야 합니다.

## 🌐 로컬 서버 실행 방법

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server 패키지)
npx http-server

# PHP
php -S localhost:8000
```

그 후 브라우저에서 `http://localhost:8000` 접속
