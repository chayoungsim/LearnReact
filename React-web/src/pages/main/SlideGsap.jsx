import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const SlideGsap = () => {
    const swiperWrapRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".slide-inner", {
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.5,
            });
        }, swiperWrapRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="rut-swiper-wrap" ref={swiperWrapRef}>
            <Swiper 
                modules={[Pagination, Navigation]}
                pagination={{ type: "fraction" }}
                navigation
                slidesPerView="auto" 
                spaceBetween={16}
                className="rutSwiper"
            >
                <SwiperSlide>
                    <div className="slide-inner">Slide 1</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner">Slide 2</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner">Slide 3</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SlideGsap;
