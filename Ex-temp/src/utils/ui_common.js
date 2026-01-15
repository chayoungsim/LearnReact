// html 샘플
// <span class="today-date" onclick="openModal(event)" modal-id="pop05">오늘</span>

//모달 열기
export const openModal = (event, type) => {
  const btn = event.currentTarget;
  const modalId = btn.getAttribute("modal-id");
  const target = document.getElementById(modalId);

  if (target) {
    setModal(modalId); // ID =`${modal-id}` 에 해당되는 모달 열기
  }
};
window.openModal = openModal;

export const setModal = (target) => {
  // target : 모달 아이디
  target = document.getElementById(target);
  target.style.display = "block";
  if (target.classList.contains("type-bottom")) {
    const modalHeadHeight = target.querySelector(".modal-header")
      ? target.querySelector(".modal-header").offsetHeight
      : 0;
    const modalFootHeight = target.querySelector(".modal-footer")
      ? target.querySelector(".modal-footer").offsetHeight
      : 0;

    let modalHeight = modalHeadHeight + modalFootHeight + 50;

    target.querySelector(
      ".modal-cont"
    ).style = `--modal-cont-height:${modalHeight}px`;
  }

  setTimeout(() => {
    target.classList.add("is-active");
    document.body.classList.add("modal-open");
  }, 300);
};



import { setViewportHeight } from './viewport.js';
const handleViewportResize = () => {
  requestAnimationFrame(() => {
    setViewportHeight();
  });
};

handleViewportResize();
window.addEventListener('resize', handleViewportResize);
window.addEventListener('orientationchange', handleViewportResize);
