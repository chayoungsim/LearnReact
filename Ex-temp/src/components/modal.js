
export function openModal(type) {
    const modal = document.getElementById(
        'modal' + type.charAt(0).toUpperCase() + type.slice(1)
    );
    if (!modal) return;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

export function closeModal(type) {
    const modal = document.getElementById(
        'modal' + type.charAt(0).toUpperCase() + type.slice(1)
    );
    if (!modal) return;

    modal.classList.remove('show');
    document.body.style.overflow = '';
}

export function handleConfirm(type) {
    alert(`${type} 모달 확인!`);
    closeModal(type);
}


export function selectOption(option) {
    alert(`${option} 선택됨!`);
    closeModal('bottom');
}


export function initModalEvents() {
    /* 오버레이 클릭 시 닫기 */
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', e => {
            if (e.target === overlay) {
                overlay.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });

    /* 하단 모달 스와이프 닫기 */
    const bottomModalContent =
        document.querySelector('.modal-bottom .modal-content');

    if (!bottomModalContent) return;

    let startY = 0;
    let currentY = 0;

    bottomModalContent.addEventListener('touchstart', e => {
        startY = e.touches[0].clientY;
        currentY = startY;
    });

    bottomModalContent.addEventListener('touchmove', e => {
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;

        if (diff > 0) {
            bottomModalContent.style.transform = `translateY(${diff}px)`;
        }
    }, { passive: true });

    bottomModalContent.addEventListener('touchend', () => {
        const diff = currentY - startY;

        if (diff > 100) {
            closeModal('bottom');
        }

        bottomModalContent.style.transform = '';
    });
}

window.openModal = openModal;
window.closeModal = closeModal;
window.handleConfirm = handleConfirm;
window.selectOption = selectOption;