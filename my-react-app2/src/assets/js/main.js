// 전역 언어 설정
const lang = document.documentElement.lang || 'ko';

function visualVideo(){
    let isPlaying = false; // 초기값을 false로 설정
    let progressAnimationFrame = null;
    const video = document.getElementById('bgVideo');
    const progressBar = document.querySelector('.video-progress-bar span');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const blindText = playPauseBtn?.querySelector('.blind');
    
    if (!video || !progressBar || !playPauseBtn || !blindText) {
        console.warn('Required video elements not found');
        return;
    }
    
    // 초기 상태 설정   
    resetProgressBar();

    //handleVideoPause();
    
    // 재생/일시정지 버튼
    playPauseBtn.addEventListener('click', togglePlayPause);
        
    // 비디오 이벤트
    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('loadedmetadata', handleVideoLoaded);
    video.addEventListener('play', handleVideoPlay);
    video.addEventListener('pause', handleVideoPause);
    
    // 재생/일시정지 토글
    function togglePlayPause() {
        if (isPlaying) {
            pauseVideo();
        } else {
            playVideo();
        }
    }
    
    // 비디오 재생
    function playVideo() {
        if (video) {
            video.play().then(() => {
                isPlaying = true;
                updatePlayPauseButton();
                startProgressUpdate();
            }).catch(error => {
                console.warn('Video play failed:', error);
                isPlaying = false;
                updatePlayPauseButton();
            });
        }
    }
    
    // 비디오 일시정지
    function pauseVideo() {
        if (video) {
            video.pause();
            isPlaying = false;
            updatePlayPauseButton();
            stopProgressUpdate();
        }
    }
    
    // 재생/일시정지 버튼 업데이트
    function updatePlayPauseButton() {
        if (!blindText) return;
        
        if (isPlaying) {
            // 재생 중일 때
            if (blindText.textContent.includes('재생')) {
                blindText.textContent = blindText.textContent.replace('재생', lang === 'en' ? 'Stop' : '정지');
            } else if (blindText.textContent.includes('Play')) {
                blindText.textContent = blindText.textContent.replace('Play', lang === 'en' ? 'Stop' : '정지');
            }
            playPauseBtn.classList.remove('on');
        } else {
            // 일시정지 상태일 때
            if (blindText.textContent.includes('정지')) {
                blindText.textContent = blindText.textContent.replace('정지', lang === 'en' ? 'Play' : '재생');
            } else if (blindText.textContent.includes('Stop')) {
                blindText.textContent = blindText.textContent.replace('Stop', lang === 'en' ? 'Play' : '재생');
            }
            playPauseBtn.classList.add('on');
        }
    }
    
    // 프로그레스바 업데이트 시작
    function startProgressUpdate() {
        if (progressAnimationFrame) {
            cancelAnimationFrame(progressAnimationFrame);
        }
        updateProgressBar();
    }
    
    // 프로그레스바 업데이트 중지
    function stopProgressUpdate() {
        if (progressAnimationFrame) {
            cancelAnimationFrame(progressAnimationFrame);
            progressAnimationFrame = null;
        }
    }
    
    // 프로그레스바 업데이트
    function updateProgressBar() {
        if (!video || !progressBar || !video.duration) return;
        
        const progress = ((video.currentTime / video.duration) * 100).toFixed(2);
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress);
        
        if (isPlaying) {
            progressAnimationFrame = requestAnimationFrame(updateProgressBar);
        }
    }
    
    // 프로그레스바 리셋
    function resetProgressBar() {
        if (progressBar) {
            progressBar.style.width = '0%';
            progressBar.setAttribute('aria-valuenow', '0');
        }
    }
    
    // 비디오 종료 처리
    function handleVideoEnd() {
        resetProgressBar();
        if (video) {
            video.currentTime = 0;
            playVideo();
        }
    }
    
    // 비디오 로드 완료 처리
    function handleVideoLoaded() {
        resetProgressBar();
        if (isPlaying) {
            playVideo();
        }
    }
    
    // 비디오 재생 시작 처리
    function handleVideoPlay() {
        isPlaying = true;
        updatePlayPauseButton();
        startProgressUpdate();
    }
    
    // 비디오 일시정지 처리
    function handleVideoPause() {
        isPlaying = false;
        updatePlayPauseButton();
        stopProgressUpdate();
    }

}

function portfolioVideo(){
    const galleryItems = document.querySelectorAll('.main-portfolio ul li');   
    galleryItems.forEach(item => {
        const video = item.querySelector('video');        
        let isPlaying = false;
        if (!video) {
            console.warn('Required video elements not found');
            return;
        }        
        pauseVideo();
        ['click', 'mouseover', 'focus'].forEach(event =>
            item.addEventListener(event, () => handleInteraction(item))
        );
        item.addEventListener('mouseleave', resetAllItems);       
        
        function handleInteraction(item) {            
            item.classList.add('on');                     
            playVideo();            
            galleryItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('on');
                }
            });     
        }
        function resetAllItems() {
            galleryItems.forEach(item => {
                item.classList.remove('on');                
            });
            pauseVideo();
        }        
        function pauseVideo() {
            video.pause();
            isPlaying = false;                      
        } 
        function playVideo() {
            video.play().then(() => {
                isPlaying = true;               
            }).catch(error => {
                console.warn('Video play failed:', error);
                isPlaying = false;                
            });
        }  
    });
    
 
}

function videoFrame(){
    const videoFrame = document.querySelectorAll('.video-frame');
    videoFrame.forEach(item => {
        const video = item.querySelector('video');
        const playPauseBtn = item.querySelector('.video-controls');
        const btn = playPauseBtn?.querySelector('button');
        const blindText = playPauseBtn?.querySelector('.blind');
        let isPlaying = true; // 각 프레임별 재생 상태
        let hideBtnTimer = null;

        if (!video || !playPauseBtn) {
            console.warn('Required video elements not found');
            return;
        }

        // 초기 상태 설정 
        pauseVideo();

        // 재생/일시정지 버튼 클릭 이벤트
        playPauseBtn.addEventListener('click', togglePlayPause);
        
        // 재생/일시정지 토글 함수
        function togglePlayPause() {
            if (isPlaying) {
                pauseVideo();
            } else {
                playVideo();
            }
        }

        // function handleInteraction(item) {
        //     item.classList.add('on');                   
        //     playVideo();
        // }

        // function resetAllItems() {
        //     videoFrame.forEach(item => {
        //         item.classList.remove('on');            
        //     });
        // }

        function pauseVideo() {
            video.pause();
            isPlaying = false;
            updatePlayPauseButton();            
        }

        function playVideo() {
            video.play().then(() => {
                isPlaying = true;
                updatePlayPauseButton();
            }).catch(error => {
                console.warn('Video play failed:', error);
                isPlaying = false;
                updatePlayPauseButton();
            });
        }

        function updatePlayPauseButton() {
            if (!blindText) return;    
            if (isPlaying) {
                // 재생 중일 때
                if (blindText.textContent.includes('재생')) {
                    blindText.textContent = blindText.textContent.replace('재생', lang === 'en' ? 'Stop' : '정지');
                } else if (blindText.textContent.includes('Play')) {
                    blindText.textContent = blindText.textContent.replace('Play', lang === 'en' ? 'Stop' : '정지'); 
                }
                playPauseBtn.classList.add('pause');

                clearTimeout(hideBtnTimer);
                hideBtnTimer = setTimeout(() => {
                    if (btn) {
                        btn.style.display = 'none';
                    }
                }, 2000);                
            } else {
                // 일시정지 상태일 때
                if (blindText.textContent.includes('정지')) {
                    blindText.textContent = blindText.textContent.replace('정지', lang === 'en' ? 'Play' : '재생');
                } else if (blindText.textContent.includes('Stop')) {
                    blindText.textContent = blindText.textContent.replace('Stop', lang === 'en' ? 'Play' : '재생');
                }
                playPauseBtn.classList.remove('pause');
                btn.style.display = 'block';
            }
        }
    });
}

function policyBnr(){
    const policyBnr = document.querySelectorAll('.policy-bnr');
    
    // 디바이스 타입 감지
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    policyBnr.forEach(item => {
        const video = item.querySelector('video');        
        if (!video) {
            console.warn('Required video elements not found');
            return;
        }   
        
        // 초기 상태 설정
        video.pause();
        video.currentTime = 0; // 비디오를 처음으로 되돌림
        
        // PC와 모바일에서 다른 동작
        if (isMobile()) {
            // 모바일: 비디오는 항상 멈춤 상태
            video.pause();
            video.currentTime = 0;  
        } else {
            // PC: n-active 클래스가 생기면 자동 재생
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target.classList.contains('n-active')) {
                        // n-active 클래스가 있고 화면에 보일 때 비디오 재생
                        video.play().catch(error => {
                            console.warn('Video autoplay failed:', error);
                        });
                    } else {
                        // 화면에서 벗어나거나 n-active 클래스가 없으면 비디오 정지
                        video.pause();
                        video.currentTime = 0;
                    }
                });
            }, {
                threshold: 0.5, // 50% 이상 보일 때 트리거
                rootMargin: '0px 0px -10% 0px'
            });
            
            observer.observe(item);
        }
        
        // 비디오 이벤트 리스너
        video.addEventListener('ended', () => {
            // 비디오가 끝나면 처음으로 되돌리고 정지
            video.currentTime = 0;
            video.pause();
        });
        
        video.addEventListener('error', (e) => {
            console.warn('Video error:', e);
        });
       

        item.addEventListener('focus',(e)=> {
            item.classList.add('hv');
        })

        document.querySelector('.main-news .news-title a').addEventListener('focus',(e)=> {
            item.classList.remove('hv');
        })
    });




}

// 뉴스 스와이퍼 - PC에서는 기능 없음, 모바일에서만 슬라이드
function newsAction() {
    let newsSwiper = null;   
    function isMobile() {
        return window.innerWidth <= 768; 
    }        
       

    function initSwiper() {
        const newsSwiperElement = document.querySelector('.news-swiper');    
        if (!newsSwiperElement) return;  
        
        if (isMobile() && !newsSwiper) {    
            newsSwiper = new Swiper('.news-swiper', {
                slidesPerView: 'auto', 
                spaceBetween: 20,
                loop: false,
                effect: 'slide',
                watchSlidesProgress: true, // 슬라이드 진행률 감시
                watchSlidesVisibility: true, // 슬라이드 가시성 감시
                on: {
                    init: updatePaginationAndProgress,
                    slideChange: updatePaginationAndProgress,
                   
                },               
            });  
        } else if(!isMobile() && newsSwiper){
            newsSwiper.destroy(true, true);
            newsSwiper = null;
        }
    }

    function updatePaginationAndProgress(swiper) {
        const currentPage = document.querySelector('.current-page');
        const totalPage = document.querySelector('.total-page');
        const progressBar = document.querySelector('.progress-bar');
        if (currentPage && totalPage && progressBar) {
            const current = (swiper.activeIndex + 1).toString().padStart(2, '0');
            const total = swiper.slides.length.toString().padStart(2, '0');   
            //const progress = Math.min(swiper.progress * 100, 100); 
            const progress = ((swiper.activeIndex + 1) / swiper.slides.length) * 100;
                       
            currentPage.textContent = current;
            totalPage.textContent = total;
            progressBar.style.width = `${progress}%`;
        }
    }
    
    // 초기 실행
    initSwiper();
    
    // 리사이즈 이벤트 리스너
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            initSwiper();
        }, 250); // 리사이즈 완료 후 250ms 뒤에 실행
    });
}

function loadmotion() {
    const io = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{	
            if(entry.intersectionRatio>0){
                entry.target.classList.add('n-active');
            } else{
                entry.target.classList.remove('n-active');
            }
        })
    })
    const motionList = document.querySelectorAll('.motion');
    motionList.forEach((el)=>{
        io.observe(el)
    })	
}

document.addEventListener('DOMContentLoaded', () => {   
    visualVideo();  
    portfolioVideo();
    videoFrame();
    policyBnr();
    newsAction();

    const runLoadMotionWhenBodyLoaded = () => {
        if (document.body && document.body.classList.contains('load')) {
            loadmotion();
            return true;
        }
        return false;
    };

    if (!runLoadMotionWhenBodyLoaded()) {
        const bodyObserver = new MutationObserver(() => {
            if (runLoadMotionWhenBodyLoaded()) {
                bodyObserver.disconnect();
            }
        });
        if (document.body) {
            bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        }
    }
});