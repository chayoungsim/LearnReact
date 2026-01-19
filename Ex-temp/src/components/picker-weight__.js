

const integerWheel = document.querySelector('#integer .wheel-items');
const decimalsWheel = document.querySelector('#decimals .wheel-items');

let selectedInteger = 60;
let selectedDecimals = 1;

function createWheelItems(container, start, end, selected) {
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

createWheelItems(integerWheel, 30, 200, selectedInteger);
createWheelItems(decimalsWheel, 0, 9, selectedDecimals);

function centerWheel(container, selected, min) {
    const items = container.querySelectorAll('.wheel-item');
    const offset = (selected - min) * -50 + 75;
    container.style.transform = `translateY(${offset}px)`;
    
    items.forEach((item, index) => {
        if (parseInt(item.textContent) === selected) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

function addWheelInteraction(wheelColumn, min, max, currentValue, updateCallback) {
    const container = wheelColumn.querySelector('.wheel-items');
    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    wheelColumn.addEventListener('mousedown', startDrag);
    wheelColumn.addEventListener('touchstart', startDrag);

    function startDrag(e) {
        isDragging = true;
        startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
        currentY = startY;
    }

    function onDrag(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
        const delta = currentY - startY;
        const steps = Math.round(delta / 50);
        const newValue = Math.max(min, Math.min(max, currentValue - steps));
        
        if (newValue !== currentValue) {
            currentValue = newValue;
            updateCallback(newValue);
            centerWheel(container, currentValue, min);
            startY = currentY;
        }
    }

    function endDrag() {
        isDragging = false;
    }

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('touchmove', onDrag, { passive: false });
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);
}

centerWheel(integerWheel, selectedInteger, 30);
centerWheel(decimalsWheel, selectedDecimals, 0);

addWheelInteraction(document.getElementById('integer'), 30, 200, selectedInteger, 
    (val) => selectedInteger = val);
addWheelInteraction(document.getElementById('decimals'), 0, 9, selectedDecimals, 
    (val) => selectedDecimals = val);

// function submitWeight() {
//     const weight = `${selectedInteger}.${selectedDecimals}`;
//     alert(`선택된 몸무게: ${weight} kg`);
// }