export default class WheelPicker {
    constructor(pickerId, listId, items, initialValue, onChange) {
        this.picker = document.getElementById(pickerId);
        this.list = document.getElementById(listId);
        this.items = items;
        this.currentIndex = items.indexOf(initialValue);
        this.onChange = onChange;

        this.itemHeight = 40;
        this.visibleItems = 5;
        this.centerOffset = Math.floor(this.visibleItems / 2) * this.itemHeight;

        this.isDragging = false;
        this.startY = 0;
        this.startTranslate = 0;
        this.currentTranslate = 0;

        this.init();
    }

    init() {
        this.renderItems();
        this.updatePosition(false);
        this.attachEvents();
    }

    renderItems() {
        this.list.innerHTML = this.items
            .map(
                (item, index) =>
                    `<div class="wheel-item" data-index="${index}">${item}</div>`
            )
            .join('');
    }

    updatePosition(animate = true) {
        const translate =
            this.centerOffset - this.currentIndex * this.itemHeight;
        this.currentTranslate = translate;

        this.list.classList.toggle('dragging', !animate);
        this.list.style.transform = `translateY(${translate}px)`;

        this.updateItemStyles();
    }

    updateItemStyles() {
        const items = this.list.querySelectorAll('.wheel-item');

        items.forEach((item, index) => {
            const distance = Math.abs(this.currentIndex - index);
            const opacity = Math.max(0.3, 1 - distance * 0.3);
            const scale = Math.max(0.8, 1 - distance * 0.1);

            item.style.opacity = opacity;
            item.style.transform = `scale(${scale})`;
            item.classList.toggle('active', index === this.currentIndex);
        });
    }

    handleStart(e) {
        this.isDragging = true;
        this.startY = e.type.includes('mouse')
            ? e.clientY
            : e.touches[0].clientY;
        this.startTranslate = this.currentTranslate;
        this.list.classList.add('dragging');
    }

    handleMove(e) {
        if (!this.isDragging) return;

        e.preventDefault();
        const currentY = e.type.includes('mouse')
            ? e.clientY
            : e.touches[0].clientY;

        this.currentTranslate = this.startTranslate + (currentY - this.startY);
        this.list.style.transform = `translateY(${this.currentTranslate}px)`;
    }

    handleEnd() {
        if (!this.isDragging) return;

        this.isDragging = false;

        const movedItems = Math.round(
            (this.startTranslate - this.currentTranslate) / this.itemHeight
        );

        this.currentIndex = Math.max(
            0,
            Math.min(this.items.length - 1, this.currentIndex + movedItems)
        );

        this.updatePosition(true);
        this.onChange?.(this.items[this.currentIndex]);
    }

    attachEvents() {
        this.list.addEventListener('mousedown', e => this.handleStart(e));
        this.list.addEventListener('mousemove', e => this.handleMove(e));
        this.list.addEventListener('mouseup', () => this.handleEnd());
        this.list.addEventListener('mouseleave', () => this.handleEnd());

        this.list.addEventListener('touchstart', e => this.handleStart(e), {
            passive: false
        });
        this.list.addEventListener('touchmove', e => this.handleMove(e), {
            passive: false
        });
        this.list.addEventListener('touchend', () => this.handleEnd());
    }
}
