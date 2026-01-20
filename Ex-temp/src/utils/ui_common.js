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


export const initViewportHeight = () => {
    let ticking = false;
    const setViewportHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
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
    return () => {
        window.removeEventListener('resize', update);
    };
};

export const headerFix = ({headerSelector ='header', offset = 50 } = {}) => {
    const headerEl = document.querySelector(headerSelector);
    if (!headerEl) return;
    let lastScrollY = window.scrollY;
    let isFixed = false;
    const onScroll = () => {
        const currentY = window.scrollY;
        if (currentY > offset && currentY > lastScrollY && !isFixed) {
            headerEl.classList.add('is-fixed');
            isFixed = true;
        }
        if (currentY <= offset && isFixed) {
            headerEl.classList.remove('is-fixed');
            isFixed = false;
        }
        lastScrollY = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true }); 
    return () => {
        window.removeEventListener('scroll', onScroll);
        headerEl.classList.remove('is-fixed');
    };
};

export const fixTabOnScroll = ({headerSelector = 'header',tabSelector = '.tab-wrap'} = {}) => {
    const header = document.querySelector(headerSelector);
    const tabWrap = document.querySelector(tabSelector);
    if (!header || !tabWrap) return;
    const headerHeight = header.offsetHeight;
    const tabOffsetTop = tabWrap.getBoundingClientRect().top + window.scrollY;
    // 레이아웃 유지용 placeholder
    const placeholder = document.createElement('div');
    placeholder.style.height = `${tabWrap.offsetHeight}px`;
    placeholder.style.display = 'none';
    tabWrap.parentNode.insertBefore(placeholder, tabWrap);
    const onScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY + headerHeight >= tabOffsetTop) {
            if (!tabWrap.classList.contains('is-fixed')) {
                tabWrap.classList.add('is-fixed');
                tabWrap.style.top = `${headerHeight}px`;
                placeholder.style.display = 'block';
            }
        } else {
            if (tabWrap.classList.contains('is-fixed')) {
                tabWrap.classList.remove('is-fixed');
                tabWrap.style.top = '';
                placeholder.style.display = 'none';
            }
        }
    };
    window.addEventListener('scroll', onScroll);   
    return () => {
        window.removeEventListener('scroll', onScroll);
        placeholder.remove();
        tabWrap.classList.remove('is-fixed');
        tabWrap.style.top = '';
    };
}


export const quickToggle = ({buttonSelector = '.btn-quick',overlaySelector = '.quick-overlay', activeClass = 'open'} = {}) => {
  const quickBtn = document.querySelector(buttonSelector);
  const quickOverlay = document.querySelector(overlaySelector);
  if (!quickBtn || !quickOverlay) return;
  const onToggle = () => {
    quickBtn.classList.toggle(activeClass);
    quickOverlay.classList.toggle(activeClass);
  };
  const onClose = () => {
    quickBtn.classList.remove(activeClass);
    quickOverlay.classList.remove(activeClass);
  };
  quickBtn.addEventListener('click', onToggle);
  quickOverlay.addEventListener('click', onClose);

  return () => {
    quickBtn.removeEventListener('click', onToggle);
    quickOverlay.removeEventListener('click', onClose);
    onClose();
  };

}


document.addEventListener('DOMContentLoaded', () => {
  initViewportHeight();
  headerFix();  
  fixTabOnScroll();
  quickToggle();

  //fixTabOnScroll({headerSelector: 'header',tabSelector: '.tab-wrap'});
})

