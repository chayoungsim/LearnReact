// dropdown.js - 재사용 가능한 드롭다운 모듈

class Dropdown {
    constructor(element, options = {}) {
        this.container = element;
        this.button = element.querySelector('[data-dropdown-button]');
        this.list = element.querySelector('[data-dropdown-list]');
        this.items = element.querySelectorAll('[data-dropdown-item]');
        
        // 옵션 설정
        this.options = {
            closeOnSelect: options.closeOnSelect !== false, // 기본값: true
            placeholder: options.placeholder || '선택해주세요',
            onChange: options.onChange || null, // 콜백 함수
            ...options
        };
        
        this.selectedValue = null;
        this.init();
    }
    
    init() {
        if (!this.button || !this.list) {
            console.error('드롭다운 요소를 찾을 수 없습니다.');
            return;
        }
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // 버튼 클릭 이벤트
        this.button.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggle();
        });
        
        // 아이템 클릭 이벤트
        this.items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.selectItem(item);
            });
        });
        
        // 리스트 내부 클릭 시 이벤트 전파 방지
        this.list.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // 외부 클릭 시 닫기
        document.addEventListener('click', () => {
            this.close();
        });
        
        // ESC 키로 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });
    }
    
    toggle() {
        if (this.isOpen()) {
            this.close();
        } else {
            this.open();
        }
    }
    
    open() {
        this.button.classList.add('active');
        this.list.classList.add('active');
        this.button.setAttribute('aria-expanded', 'true');
    }
    
    close() {
        this.button.classList.remove('active');
        this.list.classList.remove('active');
        this.button.setAttribute('aria-expanded', 'false');
    }
    
    isOpen() {
        return this.list.classList.contains('active');
    }
    
    selectItem(item) {
        const value = item.getAttribute('data-value');
        const text = item.textContent.trim();
        
        // 이전 선택 제거
        this.items.forEach(i => i.classList.remove('selected'));
        
        // 새로운 선택 추가
        item.classList.add('selected');
        
        // 버튼 텍스트 업데이트
        this.button.textContent = text;
        this.selectedValue = value;
        
        // 옵션에 따라 드롭다운 닫기
        if (this.options.closeOnSelect) {
            this.close();
        }
        
        // 콜백 함수 실행
        if (typeof this.options.onChange === 'function') {
            this.options.onChange(value, text, item);
        }
        
        // 커스텀 이벤트 발생
        this.container.dispatchEvent(new CustomEvent('dropdown:change', {
            detail: { value, text, item }
        }));
    }
    
    getValue() {
        return this.selectedValue;
    }
    
    setValue(value) {
        const item = Array.from(this.items).find(
            i => i.getAttribute('data-value') === value
        );
        
        if (item) {
            this.selectItem(item);
        }
    }
    
    reset() {
        this.items.forEach(i => i.classList.remove('selected'));
        this.button.textContent = this.options.placeholder;
        this.selectedValue = null;
    }
    
    destroy() {
        // 이벤트 리스너 제거는 복잡하므로 필요시 구현
        this.button.classList.remove('active');
        this.list.classList.remove('active');
    }
}

// 초기화 헬퍼 함수
function initDropdowns(selector = '[data-dropdown]', options = {}) {
    const dropdowns = [];
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        const dropdown = new Dropdown(element, options);
        dropdowns.push(dropdown);
    });
    
    return dropdowns;
}

// ES6 모듈로 내보내기
export { Dropdown, initDropdowns };

// 브라우저 전역 객체로도 사용 가능
if (typeof window !== 'undefined') {
    window.Dropdown = Dropdown;
    window.initDropdowns = initDropdowns;
}
