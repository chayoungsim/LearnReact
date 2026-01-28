'use client';
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Visual() {

    const visualRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!visualRef.current) return;
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            /*pc*/
            mm.add('(min-width: 1024px)', () => {
                gsap.fromTo(
                    visualRef.current,
                    { scale: 1 },
                    {   
                        scale: 0.6,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: visualRef.current,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: true
                        }
                    }

                )
            })


        }, visualRef);

        return () => ctx.revert();

    },[])

    return (
        <div className="visual" ref={visualRef}>
            <div className="static">
                <h2>Visual</h2>
                <p>The React Framework for the Web</p>
            </div>            
        </div>
    )
}