"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SubVisual({
    title,
    imgSrc,
}: Readonly<{
    title: string;
    imgSrc: string;
}>) {
    const slideRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!slideRef.current || !visualRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                slideRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: slideRef.current,
                        start: "top 80%",
                    },
                },
            );

            gsap.fromTo(
                visualRef.current,
                { scale: 1 },
                {
                    scale: 0.7,
                    ease: "none",
                    scrollTrigger: {
                        trigger: visualRef.current,
                        start: "top 10%",
                        end: "bottom top",
                        scrub: true,
                    },
                },
            );
        }, visualRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="subVisual">
            <h3 ref={slideRef}>{title}</h3>
            <div className="fullSection" ref={visualRef}>
                <img src={`/images/${imgSrc}`} alt={title} />
            </div>
        </div>
    );
}
