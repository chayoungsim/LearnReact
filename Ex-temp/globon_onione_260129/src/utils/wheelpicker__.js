const ITEM_HEIGHT = 60;

export function createWheel({
  container,
  min,
  max,
  initialValue,
  step = 1,
  onChange,
}) {
  const wheelItems = container.querySelector(".wheel-items");

  let currentValue = initialValue;
  let startY = 0;
  let isDragging = false;

  /* -----------------------------
   * Render
   * ----------------------------- */
  function render() {
    wheelItems.innerHTML = "";

    for (let i = min; i <= max; i++) {
      const el = document.createElement("div");
      el.className = "wheel-item";
      el.textContent = i;

      if (i === currentValue) {
        el.classList.add("selected");
      }

      wheelItems.appendChild(el);
    }

    center();
  }

  /* -----------------------------
   * Center align
   * ----------------------------- */
  function center() {
    const offset = -(currentValue - min) * ITEM_HEIGHT;
    wheelItems.style.transform = `translateY(${offset}px)`;

    wheelItems.querySelectorAll(".wheel-item").forEach((el) => {
      el.classList.toggle("selected", Number(el.textContent) === currentValue);
    });
  }

  /* -----------------------------
   * Pointer Events
   * ----------------------------- */
  function onPointerDown(e) {
    isDragging = true;
    startY = e.clientY;

    container.setPointerCapture(e.pointerId);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);
  }

  function onPointerMove(e) {
    if (!isDragging) return;

    if (e.cancelable) {
      e.preventDefault();
    }

    const delta = e.clientY - startY;
    const steps = Math.round(delta / ITEM_HEIGHT);
    const nextValue = Math.max(min, Math.min(max, currentValue - steps * step));

    if (nextValue !== currentValue) {
      currentValue = nextValue;
      startY = e.clientY;
      center();
      onChange?.(currentValue);
    }
  }

  function onPointerUp(e) {
    isDragging = false;

    container.releasePointerCapture(e.pointerId);
    container.removeEventListener("pointermove", onPointerMove);
    container.removeEventListener("pointerup", onPointerUp);
    container.removeEventListener("pointercancel", onPointerUp);
  }

  /* -----------------------------
   * Init
   * ----------------------------- */
  container.addEventListener("pointerdown", onPointerDown);
  render();

  /* -----------------------------
   * Public API
   * ----------------------------- */
  return {
    getValue() {
      return currentValue;
    },
    setValue(value) {
      currentValue = Math.max(min, Math.min(max, value));
      center();
    },
  };
}
