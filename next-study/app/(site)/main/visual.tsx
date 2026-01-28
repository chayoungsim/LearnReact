'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "@/styles/components/visual.scss";

gsap.registerPlugin(ScrollTrigger)

export default function Visual() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        if (!sectionRef.current ||!videoRef.current) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            /* PC */
            mm.add('(min-width: 1024px)', () => {
                gsap.fromTo(
                    sectionRef.current,
                    { scale: 1 }, 
                    {
                        scale: 0.7,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: true
                        }
                    }
                );

            })

            /* Mobile */
            mm.add('(max-width: 1023px)', () => {

            })

            
        }, sectionRef);

        return () => ctx.revert();

    },[])

    return(
        <div className="visual" ref={sectionRef}>
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/media/visual_video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}