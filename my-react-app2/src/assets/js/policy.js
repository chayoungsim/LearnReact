(function() {
    // DOM이 완전히 로드된 후 실행
    document.addEventListener('DOMContentLoaded', function() {
        const accordion = document.querySelector('.listArea');        
        if (!accordion) {
            console.warn('Accordion element (.listArea) not found');
            return;
        }        
        const items = accordion.querySelectorAll('.listItem');
        const buttons = accordion.querySelectorAll('.listBtn'); 
        if (items.length === 0 || buttons.length === 0) {
            console.warn('No accordion items or buttons found');
            return;
        }        
        // 아코디언 기능 구현
        buttons.forEach((btn) => {
            btn.addEventListener('click', function() {
                const myItem = this.closest('li');
                
                if (!myItem) {
                    console.warn('Parent li element not found for button');
                    return;
                }                
                const isActive = myItem.classList.contains('show');   
                items.forEach(item => item.classList.remove('show'));  
                if (!isActive) {
                    myItem.classList.add('show');
                }
            });
        });        
        console.log('Accordion initialized successfully');
    });
})();