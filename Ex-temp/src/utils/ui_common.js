//모달 열기
export const openModal = (event, type) => {
  const btn = event.currentTarget;
  const modalId = btn.getAttribute("modal-id");
  const target = document.getElementById(modalId);

  if (target) {
    setModal(modalId); // ID =`${modal-id}` 에 해당되는 모달 열기
  }
};

export const closeModal = (param) => {
  let target = null;
  
  // 1. 문자열 ID로 호출한 경우
  if (typeof param === 'string') {
    target = document.getElementById(param);
  }

  //2. 이벤트 객체로 호출한 경우
  if (!target && param?.currentTarget) {
    const modalId = param.currentTarget.getAttribute('modal-id');
    if (modalId) {
      target = document.getElementById(modalId);
    }
  }

  if (!target) return;
  target.style.display = "none";
  target.classList.remove('is-active');
  document.body.classList.remove('modal-open');
}

window.openModal = openModal;
window.closeModal = closeModal;

export const setModal = (target) => {
  // target : 모달 아이디
  target = document.getElementById(target);
  target.style.display = "flex";
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



let ticking = false;
export const setViewportHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const initViewportHeight = () => {
  const update = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      setViewportHeight();
      ticking = false;
    });
  };
  update();
  window.addEventListener('resize', update, { passive: true });
};

export const headerFix = () => { 
  let lastScrollY = 0;
  let isFixed = false; 
  let offset = 50;
  const header = document.querySelector('header');
  if (!header) return;

  lastScrollY = window.scrollY;
  const onScroll = () => {
    const currentY = window.scrollY;
    // 스크롤 다운 → fixed
    if (currentY > offset && currentY > lastScrollY && !isFixed) {
      header.classList.add('is-fixed');
      isFixed = true;
    }

    // 스크롤 업 → 해제
    if (currentY <= offset && isFixed) {
      header.classList.remove('is-fixed');
      isFixed = false;
    }

    lastScrollY = currentY;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}


document.addEventListener('DOMContentLoaded', () => {
  initViewportHeight();
  headerFix();  
})

