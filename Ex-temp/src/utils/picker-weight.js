let selectedInteger = 60;
let selectedDecimals = 1;

/* 휠 아이템 생성 */
export function createWheelItems(container, start, end, selected) {
    const items = [];
    for (let i = start; i <= end; i++) {
        const div = document.createElement('div');
        div.className = 'wheel-item';
        div.textContent = i;
        if (i === selected) {
            div.classList.add('selected');
        }
        items.push(div);
        container.appendChild(div);
    }
    return items;
}

/* 선택된 값 기준으로 휠 중앙 정렬 */
export function centerWheel(container, selected, min) {
    const items = container.querySelectorAll('.wheel-item');
    const offset = (selected - min) * -50 + 75;

    container.style.transform = `translateY(${offset}px)`;

    items.forEach(item => {
        item.classList.toggle(
            'selected',
            parseInt(item.textContent, 10) === selected
        );
    });
}

/* 휠 드래그 인터랙션 바인딩 */
export function addWheelInteraction({
    wheelColumn,
    min,
    max,
    initialValue,
    onChange
}) {
    const container = wheelColumn.querySelector('.wheel-column');

    let currentValue = initialValue;
    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    function startDrag(e) {
        isDragging = true;
        startY = e.type === 'mousedown'
            ? e.clientY
            : e.touches[0].clientY;
        currentY = startY;
    }

    function onDrag(e) {
        if (!isDragging) return;
        e.preventDefault();

        currentY = e.type === 'mousemove'
            ? e.clientY
            : e.touches[0].clientY;

        const delta = currentY - startY;
        const steps = Math.round(delta / 50);
        const newValue = Math.max(min, Math.min(max, currentValue - steps));

        if (newValue !== currentValue) {
            currentValue = newValue;
            onChange(currentValue);
            centerWheel(container, currentValue, min);
            startY = currentY;
        }
    }

    function endDrag() {
        isDragging = false;
    }

    wheelColumn.addEventListener('mousedown', startDrag);
    wheelColumn.addEventListener('touchstart', startDrag);

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('touchmove', onDrag, { passive: false });
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);
}

/* 초기화 함수 */
export function initWeightWheel() {
    const integerWheel = document.querySelector('#integer .wheel-items');
    const decimalsWheel = document.querySelector('#decimals .wheel-items');

    createWheelItems(integerWheel, 30, 200, selectedInteger);
    createWheelItems(decimalsWheel, 0, 9, selectedDecimals);

    centerWheel(integerWheel, selectedInteger, 30);
    centerWheel(decimalsWheel, selectedDecimals, 0);

    addWheelInteraction({
        wheelColumn: document.getElementById('integer'),
        min: 30,
        max: 200,
        initialValue: selectedInteger,
        onChange: val => (selectedInteger = val)
    });

    addWheelInteraction({
        wheelColumn: document.getElementById('decimals'),
        min: 0,
        max: 9,
        initialValue: selectedDecimals,
        onChange: val => (selectedDecimals = val)
    });
}

/* 현재 선택된 몸무게 값 반환 */
export function getSelectedWeight() {
    return `${selectedInteger}.${selectedDecimals}`;
}
