import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slide = () => {
    const [page, setPage] = useState({ current: 1, total: 4 });
    return (
        <div className="rut-swiper-wrap">
            <div className="pagination">
                {String(page.current).padStart(2, "0")} /{String(page.total).padStart(2, "0")}
            </div>
            <Swiper
                slidesPerView="auto"
                spaceBetween={16}
                loop={false}
                modules={[Pagination, Navigation]}
                pagination={{ type: "fraction" }}
                navigation
                className="rutSwiper"
                onInit={(swiper) => {
                    setPage({
                        current: 1,
                        total: swiper.slides.length,
                    });
                }}
                onSlideChange={(swiper) => {
                    setPage((prev) => ({
                        ...prev,
                        current: swiper.activeIndex + 1,
                    }));
                }}
            >
                <SwiperSlide>
                    <div className="Slide-item">1</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slide-item">2</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slide-item">3</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Slide-item">4</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slide;
