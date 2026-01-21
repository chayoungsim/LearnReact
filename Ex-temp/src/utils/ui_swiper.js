import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const initSwiper = () => {
    return new Swiper(".swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
    });
};

export const rutSwiper = () => {
    function updatePagination(swiper) {
        const pagination = swiper.el.querySelector(".pagination");
        const currentPage = swiper.el.querySelector(".current-page");
        const totalPage = swiper.el.querySelector(".total-page");

        if (!pagination || !currentPage || !totalPage) return;

        // progress가 1에 가까우면 마지막 페이지로 설정
        const isAtEnd = swiper.progress >= 0.99;
        const current = isAtEnd
            ? String(swiper.slides.length).padStart(2, "0")
            : String(swiper.activeIndex + 1).padStart(2, "0");
        const total = String(swiper.slides.length).padStart(2, "0");

        currentPage.textContent = current;
        totalPage.textContent = total;
        pagination.style.display = "block";
    }

    return new Swiper(".rut-swiper", {
        slidesPerView: "auto",
        loop: false,
        spaceBetween: 16,
        on: {
            init: updatePagination,
            slideChange: updatePagination,
            progress: updatePagination, // 스크롤 진행도 감지
        },
    });
};
