function historyScrollBar() {
  const THRESHOLD = 100; // 100px 내려가면 모션 시작
  let ticking = false;
  function bar() {
    const barEl = document.querySelector(".line-active");
    const historyWrap = document.querySelector(".history-wrap");

    if (!barEl || !historyWrap) return;

    const dT = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const wrapBottom = historyWrap.offsetTop + historyWrap.offsetHeight;
    const dH = Math.max(docHeight, wrapBottom);
    const wH = window.innerHeight;

    const start = THRESHOLD;
    const totalScrollable = Math.max(0, (dH - wH) - start);
    const progressed = Math.max(0, dT - start);

    const percent =
      totalScrollable > 0
        ? Math.min((progressed / totalScrollable) * 100, 100)
        : 0;

    barEl.style.height = percent.toFixed(2) + "%";
  }
  function init() {
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            bar();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
    bar();
  }
  // 초기화 실행
  init();
}

function history() {     
    window.addEventListener('scroll',()=>{
        changeActive();       
    }) 
    function changeActive(){
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const lists = document.querySelectorAll('.list');
        lists.forEach((list,idx) =>{
            const cont = list.querySelector('.ui-move');
            const tit = list.querySelector('h4');
            const ul = list.querySelector('ul');
            const targetTop = list.offsetTop - window.innerHeight/1.1;

            if(targetTop<= scrollTop){
                list.classList.add('active');
                if(idx>0){
                    lists[idx-1].classList.add('on');
                }
                if(ul) {                        
                    ul.classList.add('fadein');
                }
                if(tit) {
                    tit.classList.add('fadein');
                }
            } else {
                list.classList.remove('active');
                if(idx>0){
                    lists[idx-1].classList.remove('on');
                }                    
            }
        })
    }
}
function network() {
    initTabs({tabSelector: '.tab-nav>li', panelSelector: '.tab-panel'});
    const hvLayer = document.querySelectorAll('.hv-layer');
    hvLayer.forEach((layer) => {
        layer.addEventListener('mouseenter',(e) => {
            e.currentTarget.parentNode.classList.add('hv');
        })
        layer.addEventListener('mouseleave', (e) => {
            e.currentTarget.parentNode.classList.remove('hv');
        })

        const btnX = layer.querySelector('button');
        btnX.addEventListener('click', (e) => {        
            console.log('dfdfd')
            e.currentTarget.parentNode.parentNode.parentNode.classList.remove('hv');
        }) 

    })    

    // Korea 버튼 클릭 시 국내 탭으로 이동
    document.querySelector('.korea .default')?.addEventListener('click', function() {       
        const tabBtns = document.querySelectorAll('.tab-nav > li > button');
        const tabPanels = document.querySelectorAll('.tab-panel');       
        tabBtns.forEach((btn, idx) => {
            if (idx === 1) {
                btn.parentNode.classList.add('active');
                tabPanels[idx].classList.add('active');;
            } else {
                btn.parentNode.classList.remove('active');
                tabPanels[idx].classList.remove('active');
            }
        });
    });

    const mLayerBtns = document.querySelectorAll('.m-layer');
    mLayerBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const classList = Array.from(e.currentTarget.classList);
            const locClass = classList.find(cls => cls.startsWith('loc'));
            if (!locClass) return;

            const targetLi = document.querySelector('.local-map-list li.' + locClass);
            if (targetLi) {                
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 100;
                const targetRect = targetLi.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetY = targetRect.top + scrollTop - headerHeight;

                window.scrollTo({
                    top: targetY,
                    behavior: 'smooth'
                });              
            }
        })
    })

    //mobile
    document.querySelector('.loc0')?.addEventListener('click', function() {       
        const tabBtns = document.querySelectorAll('.tab-nav > li > button');
        const tabPanels = document.querySelectorAll('.tab-panel');       
        tabBtns.forEach((btn, idx) => {
            if (idx === 1) {
                btn.parentNode.classList.add('active');
                tabPanels[idx].classList.add('active');;
            } else {
                btn.parentNode.classList.remove('active');
                tabPanels[idx].classList.remove('active');
            }
        });
    });
    const moBtns = document.querySelectorAll('.mo-btn');
    moBtns.forEach((btn) => {
        btn.addEventListener('click',(e) => {
            const classList = Array.from(e.currentTarget.classList);
            const locClass = classList.find(cls => cls.startsWith('loc'));
            if (!locClass) return;
            const targetLi = document.querySelector('.map-global > div.' + locClass);
            if (targetLi) {               
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 100;
                const targetRect = targetLi.getBoundingClientRect();
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const targetY = targetRect.top + scrollTop - headerHeight;
                window.scrollTo({
                    top: targetY,
                    behavior: 'smooth'
                });              
            }
        })
    })     
}
function mapGlobalLayer() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 641px)": function() {           
        },
        // Mobile
        "(max-width: 640px)": function() {
            const mapGlobal = document.querySelector('.map-global')
            const layers = mapGlobal.querySelectorAll('.global-layer');  
            layers.forEach((layer) => {
                gsap.fromTo(layer, {
                    transform: "translateY(7rem)",
                    opacity:0
                },{
                    transform: "translateY(0)",
                    opacity:1,
                    duration:0.5,
                    scrollTrigger: {
                        trigger: layer,
                        start: "top 96%",
                        toggleActions: "play none none none",                        
                    }
                });
            })            
        },
    });   
    window.addEventListener("resize", ScrollTrigger.update);
} 
window.addEventListener('DOMContentLoaded', ()=> {    
    network();    
    historyScrollBar();
    if(document.querySelector('.global-layer')){
         mapGlobalLayer();
    }   
})