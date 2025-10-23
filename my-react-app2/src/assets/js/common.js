function resize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function initBodyLoad() {
  document.querySelector("body").classList.add("load");    
}

function initTabs({tabSelector, panelSelector, orientation='horizontal', onChange}) {
  const tabItems = Array.from(document.querySelectorAll(tabSelector));
  const tabs = tabItems.map(li => li.querySelector('button'));
  const panels = Array.from(document.querySelectorAll(panelSelector));
  if(!tabs.length || tabs.length !== panels.length) return;
  const tablistEl = tabs[0]?.closest('[role="tablist"]') || tabs[0]?.parentElement;
  if(tablistEl) {
    tablistEl.setAttribute('role', 'tablist');
    tablistEl.setAttribute('aria-orientation', orientation);
  }
  tabs.forEach((tabEl,i) => {
    tabEl.setAttribute('role', 'tab');
    tabEl.setAttribute('tabindex', '-1');
    if (!tabEl.id) tabEl.id = `tab-${Math.random().toString(36).slice(2, 8)}-${i}`;
    const panelEl = panels[i]
    if (!panelEl.id) panelEl.id = `panel-${Math.random().toString(36).slice(2, 8)}-${i}`;
    tabEl.setAttribute('aria-controls', panelEl.id);
    panelEl.setAttribute('role', 'tabpanel');
    panelEl.setAttribute('aria-labelledby', tabEl.id);     
  });
  function activate(idx, moveFocus = true) {
    tabs.forEach((t, i) =>{
      const selected = i === idx;
      t.setAttribute('aria-selected', String(selected));
      t.setAttribute('tabindex', selected ? '0' : '-1');
      tabItems[i]?.classList.toggle('active', selected);

      if(selected) {
        panels[i].removeAttribute('hidden');
        panels[i].removeAttribute('tabindex');
        panels[i].classList.add('active');
        if (moveFocus) t.focus();
      } else {
        panels[i].setAttribute('hidden', 'true');
        panels[i].removeAttribute('tabindex');
        panels[i].classList.remove('active');
      }
    });
    if (typeof onChange === 'function') onChange(idx);    
  }
  const initial = Math.max(0, tabs.findIndex(t => t.getAttribute('aria-selected') === 'true'));
  tabs.forEach((t, i) => {
    t.setAttribute('aria-selected', i === initial ? 'true' : 'false');
    t.setAttribute('tabindex', i === initial ? '0' : '-1');
    tabItems[i]?.classList.toggle('active', i === initial);
    if (i === initial) {
      panels[i].removeAttribute('hidden');
    } else {
      panels[i].setAttribute('hidden', 'true');
    }
    // title 제거(중복 낭독 방지)
    t.removeAttribute('title');    
  });
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => activate(i, false));
  });
  const prevKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
  const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
  tabs.forEach((t, i) => {
    t.addEventListener('keydown', (e) => {
      let targetIndex = null;
      switch (e.key) {
        case prevKey:
          targetIndex = (i - 1 + tabs.length) % tabs.length;
          break;
        case nextKey:
          targetIndex = (i + 1) % tabs.length;
          break;
        case 'Home':
          targetIndex = 0;
          break;
        case 'End':
          targetIndex = tabs.length - 1;
          break;
        case 'Enter':
        case ' ':          
          activate(i, false);
          e.preventDefault();
          return;
        default:
          return;
      }
      tabs[targetIndex].focus(); 
      e.preventDefault();
    });
  });
  activate(initial, false);
}
function accordion(selector) {
  const accordions = document.querySelectorAll(selector);
  if (accordions.length === 0) return;
  accordions.forEach(accordion => {
      const items = accordion.querySelectorAll('.accordion-item');
      if (items.length === 0) return;

      items.forEach((item) => {
          const btn = item.querySelector('.accordions-trigger');
          const panel = item.querySelector('.accordions-panel');
          if (!btn || !panel) return;

          btn.addEventListener('click', () => {
              const isActive = item.classList.contains('show');                                    
              items.forEach(otherItem => {
                  otherItem.classList.remove('show');
                  otherItem.querySelector('.accordions-trigger')?.setAttribute('aria-expanded', 'false');
                  otherItem.querySelector('.accordions-panel')?.setAttribute('hidden', '');
              });                                    
              if (!isActive) {
                  item.classList.add('show');
                  btn.setAttribute('aria-expanded', 'true');
                  panel.removeAttribute('hidden');

                  // setTimeout(() => {
                  //     const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                  //     const itemTop = item.getBoundingClientRect().top + window.scrollY;
                  //     window.scrollTo({
                  //         top: itemTop - headerHeight,
                  //         behavior: 'smooth'
                  //     });
                  // }, 100);
              }
          });
      });
  });
}     

function selectBox() {
    const selectBox = document.querySelectorAll('.selectBox');   
    selectBox.forEach(box => {
        const select = box.querySelector('.select');
        if (!select) return;
        // focus 시 open 추가 (선택 사항)
        select.addEventListener('focus', () => {
            box.classList.add('open');
        });
        // change 시 toggle
        select.addEventListener('change', () => {
            box.classList.toggle('open');
        });
        // blur 시 open 제거 (선택 사항)
        select.addEventListener('blur', () => {
            box.classList.remove('open');
        });
    });
}

function initFileUpload(containerSelector = '.form-col-addFile') {
  const containers = document.querySelectorAll(containerSelector);
  containers.forEach(container =>{
    const fileInput = container.querySelector('.real-file-input');
    const fileNameInput = container.querySelector('.file-name-input');
    const triggerButton = container.querySelector('.file-open-btn');
    const deleteButton = container.querySelector('.file-delete-btn');

    if (!fileInput || !fileNameInput || !triggerButton || !deleteButton) return;
    triggerButton.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        fileNameInput.value = fileInput.files[0].name;
        deleteButton.style.display = 'inline-block';
      }
    });
    deleteButton.addEventListener('click', () => {
      // 파일 input 초기화
      fileInput.value = '';
      // 파일명 input 초기화
      fileNameInput.value = '';
      // 삭제 버튼 숨김
      deleteButton.style.display = 'none';
    });

  })  
}

function headerAction() {
  const header = document.querySelector("header");
  const gnbWrap = document.querySelector(".gnb-wrap"); 
  const nav = gnbWrap.querySelector('nav');
  const html = document.querySelector('html');
  const btnNavbar = header.querySelector('.btn-navbar');
  const navbar = document.querySelector('#navbar');
  if (!header || !gnbWrap || !nav || !navbar) {
    console.warn('Header or GNB or Navigation or Navbar wrapper not found');
    return;
  }
  function addOpenClass() {
    header.classList.add("open");
  }
  function removeOpenClass() {
      header.classList.remove("open");
  }
  nav.addEventListener('mouseover',addOpenClass);
  nav.addEventListener('focusin',addOpenClass);
  nav.addEventListener('mouseleave',removeOpenClass); 
  gnbWrap.addEventListener('focusout',removeOpenClass);  

  btnNavbar.addEventListener('click',() => {   
    if(!header.classList.contains('on')){
        header.classList.add('on');
        btnNavbar.classList.add('open');
        btnNavbar.querySelector('.blind').textContent ="전체메뉴 닫기";      
        html.classList.add('not-scroll');    
        navbar.classList.add('open');
    } else {
        header.classList.remove('on');
        btnNavbar.classList.remove('open');
        btnNavbar.querySelector('.blind').textContent ="전체메뉴 열기";  
        html.classList.remove('not-scroll');
        navbar.classList.remove('open');
    }
  })   
  const snsArea = document.querySelector('.sns-area');
  const snsBtn = snsArea.querySelector('.ico-sns');
  const snsList = snsArea.querySelector('.sns');
  const snsListSpans = snsList.querySelectorAll('span');
  if (!snsArea || !snsBtn || !snsList) return; 
  snsArea.addEventListener('click',() => {
    snsList.classList.toggle('on');
    snsListSpans.forEach(span => {
      span.classList.remove('blind');
    });
  });

  window.addEventListener('resize', () => { 
    snsList.classList.remove('on');
  })

  document.querySelector(".family-site-list-last").addEventListener("keydown", function(e) {
    // Tab 키(9)이고 Shift 키가 눌리지 않았을 때
    if (e.key === "Tab" && !e.shiftKey) {
        e.preventDefault();
        const btnNavbar = document.querySelector(".btn-navbar");
        if (btnNavbar) {
            btnNavbar.focus();
        }
    }
  }); 
}

function headerFix() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const contents = document.querySelector('#contents') || document.querySelector('#container');
  if (!header) {
    console.warn('Header element not found');
    return;
  } 
  let lastScrollTop = 0;
  let delta = 15; 
  let isScrolling = false;
  let scrollTimeout = null;
  // 헤더 고정 상태 설정
  function setHeaderFixed() {       
    if (contents.classList.contains('sub')) {
      header.classList.add('fixed');
    } 
  }

  // 스크롤 방향에 따른 헤더 상태 변경
  function updateHeaderScrollState(currentScroll) {   
    if (Math.abs(lastScrollTop - currentScroll) <= delta) return;   
    
    // 스크롤이 맨 위에 가까워졌을 때 fixed 제거
    if (currentScroll <= delta) {
      // sub 클래스를 가진 경우는 제거하지 않음
      header.classList.remove('fix');
      const isSub = contents && contents.classList && contents.classList.contains('sub');
      if (!isSub) {
        header.classList.remove('fixed');
      }
      lastScrollTop = currentScroll;
      return;
    }

    if (currentScroll > lastScrollTop && currentScroll > delta) {
      // 아래로 스크롤할 때
      header.classList.add('fixed');
      header.classList.add('fix');
    } 
    lastScrollTop = currentScroll;
  }

  // 스크롤 이벤트 최적화 (Throttling)
  function throttledScrollHandler() {
    if (!isScrolling) {
      isScrolling = true;      
      requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        updateHeaderScrollState(currentScroll);
        isScrolling = false;
      });
    }
  }

  // 스크롤 이벤트 리스너
  window.addEventListener('scroll', throttledScrollHandler, { passive: true });

  // 리사이즈 시 헤더 상태 재설정
  window.addEventListener('resize', () => {
    setHeaderFixed();
    
    // 스크롤 상태 초기화
    header.classList.remove('down');
    lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  });

  // 페이지 가시성 변경 시 헤더 상태 관리
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // 페이지가 숨겨질 때 스크롤 상태 초기화
      header.classList.remove('down');
    }
  });

  // 초기 헤더 상태 설정
  setHeaderFixed();
  
  // DOM이 완전히 로드된 후 한 번 더 실행 (안전장치)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setHeaderFixed);
  } else {
    setHeaderFixed();
  }
  
  // 페이지 로드 완료 후 한 번 더 실행 (최종 확인)
  window.addEventListener('load', setHeaderFixed);
}

function loadmotionSub() {
  const io = new IntersectionObserver(entries =>{
			entries.forEach(entry =>{	
				if(entry.intersectionRatio>0){
					entry.target.classList.add('n-active');
				} else{
					//entry.target.classList.remove('n-active');
				}
			})
		})
		const motionList = document.querySelectorAll('.n-motion');
		motionList.forEach((el)=>{
			io.observe(el)
		})	
}

function toTop() {     
  // MutationObserver로 btn-top 요소 감지
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        const btnTop = document.querySelector('.btn-top');
        if (btnTop) {
          observer.disconnect(); // 감지 중단
          initToTop(btnTop); // 실제 초기화 함수 호출
        }
      }
    });
  });

  // body 전체 감지
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // 초기 확인 (이미 존재하는 경우)
  const btnTop = document.querySelector('.btn-top');
  if (btnTop) {
    observer.disconnect();
    initToTop(btnTop);
  }
 
}

function initToTop(btnTop) {
  function toggleTopButton() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;  
    const footer = document.querySelector('.to-top');
    let footerThreshold = documentHeight - windowHeight;    
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      const footerTop = footerRect.top + scrollTop;
      footerThreshold = footerTop - windowHeight;
    }        
    if (scrollTop > 100 && scrollTop < footerThreshold) {
      btnTop.classList.add('active');
    } else {     
      btnTop.classList.remove('active');
    }
  }    
  btnTop.addEventListener('click', function(e) {
    e.preventDefault();
    
    // 부드러운 스크롤 애니메이션
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // 포커스 관리 (접근성)
    setTimeout(() => {
      // 헤더나 메인 콘텐츠로 포커스 이동
      const header = document.querySelector('header');
      const main = document.querySelector('main');
      const focusTarget = header || main || document.body;
      
      if (focusTarget) {
        focusTarget.setAttribute('tabindex', '-1');
        focusTarget.focus();
        focusTarget.removeAttribute('tabindex');
      }
    }, 500);
  });  
  btnTop.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });  
  window.addEventListener('scroll', toggleTopButton, { passive: true });  
  toggleTopButton();  
  // 반환 객체 (외부에서 제어 가능)
  return {
    show: () => btnTop.classList.add('active'),
    hide: () => btnTop.classList.remove('active'),
    toggle: () => btnTop.classList.toggle('active'),
    scrollToTop: () => btnTop.click(),
    destroy: () => {
      window.removeEventListener('scroll', toggleTopButton); 
    }
  };
}

function initFamilySite() {
  const familySites = document.querySelectorAll('.family-site');
  if (familySites.length === 0) return;
  familySites.forEach(familySite => {    
    const btnFamily = familySite.querySelector('button');
    if(btnFamily) {
      btnFamily.addEventListener('click', (e) => {
        e.stopPropagation();
        familySites.forEach(fs => {
          if(fs !== familySite) { 
            fs.classList.remove('open');
          }
        });
        familySite.classList.toggle('open');
      })
    }

    const familySiteList = familySite.querySelector('.family-site-list');
    if(!familySiteList) return;

      const lastLink = familySiteList.querySelector('.last a');
      if(lastLink) {
        lastLink.addEventListener('blur', () => {
          familySite.classList.remove('open');
        })
      }
  });

  // document.addEventListener('click', (e) => {
  //   familySites.forEach(familySite => {
  //     if(!familySite.contains(e.target)) {
  //       familySite.classList.remove('open');
  //     }
  //   })
  // })
  
}

function initNavbarMobile() {
  const navbarMobile = document.querySelector('.navbar-mobile');
  const navLists = navbarMobile.querySelectorAll('.mobile-nav-list>ul>li');
  const lnbDepth2 = navbarMobile.querySelectorAll('.lnb-depth2');
  const linkOpenFamily = navbarMobile.querySelector('.link-open-family');
  const popFamilySite = navbarMobile.querySelector('.pop-family-site');
  const linkOpenLanguage = navbarMobile.querySelector('.link-open-language');
  const popLanguage = navbarMobile.querySelector('.pop-language');
  const utilItems = navbarMobile.querySelectorAll('.mobile-nav-util-item');
  if (!navbarMobile || !navLists || !lnbDepth2 || !linkOpenFamily || !popFamilySite || !linkOpenLanguage || !popLanguage || !utilItems) return;
  
  linkOpenFamily.addEventListener('click',() => {    
    utilItems.forEach(item => {
      item.classList.remove('on');
    });
    linkOpenFamily.parentElement.classList.toggle('on');   
  });

  linkOpenLanguage.addEventListener('click',() => {
    utilItems.forEach(item => {
      item.classList.remove('on');
    });
    popLanguage.parentElement.classList.toggle('on');
  });
  if (navLists.length > 0 && lnbDepth2.length > 0) {
    navLists[0].classList.add('current');
    lnbDepth2[0].classList.add('active');
  }
  navLists.forEach((list, index) => {
    list.addEventListener('click', () => {      
      navLists.forEach((item,i) => {
        item.classList.remove('current');
        lnbDepth2[i].classList.remove('active');
      });        

      list.classList.add('current');
      lnbDepth2[index].classList.add('active');
    });
  });
}

function openPopup(id) {
    const popup = document.querySelector(id);
    if (popup) {        
        popup.classList.add('popup-open');
        document.documentElement.classList.add('not-scroll');        
        setTimeout(() => {
          popup.querySelector('.ico-close').focus();
        }, 100)
    }
}

document.addEventListener('click', function(e) {    
    const target = e.target.closest('[layer="close"]');
    if (target) {        
        const backdrop = target.closest('.popup-backdrop');
        if (backdrop) {
            backdrop.classList.remove('popup-open');
            document.documentElement.classList.remove('not-scroll');
        }
    }
});


function subDepths() {
    const subLnb = document.querySelector('.sub-lnb');
    if (!subLnb) return;

    const moDepthsBtn = subLnb.querySelector('button');
    if (!moDepthsBtn) return;

    moDepthsBtn.addEventListener('click', (e) => {
        e.currentTarget.parentNode.classList.toggle('active');
    })
}

window.addEventListener('resize', resize, {passive: false});
window.addEventListener('orientationchange', resize);
window.addEventListener('load', () => {  
    initBodyLoad();  
    resize();  
    loadmotionSub();  
    headerAction(); 
    headerFix();   
    toTop();
    initFamilySite(); 
    initNavbarMobile(); 
    subDepths();
    selectBox();
    initFileUpload();    
})