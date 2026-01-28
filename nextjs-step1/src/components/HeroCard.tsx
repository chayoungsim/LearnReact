"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { HeroItem } from "../types/hero";
type HeroCardProps = Pick<HeroItem, "title" | "description">;

export default function HeroCard({ title, description }: HeroCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        if (!cardRef.current) return;
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: cardRef.current,
                start: "top 80%",
                onEnter: () => {
                    const targets = cardRef.current?.querySelectorAll(".n-motion");
                    targets?.forEach((el, index) => {
                        gsap.delayedCall(index * 0.2, () => {
                            el.classList.add("n-active");
                        });
                    });
                },
            });
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="hero__item" ref={cardRef}>
            <h2 className="hero-title n-motion">{title}</h2>
            <p className="hero-desc n-motion">{description}</p>
        </div>
    );
}
