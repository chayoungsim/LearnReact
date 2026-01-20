import { useLayoutEffect, useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = () => {

    const containerRef = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.box',{
                x:300,
                scrollTrigger: {
                    trigger: '.box',
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                }
            })
            gsap.from('.item', {
                y: 60,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.item',
                    start: 'top 70%',
                },
            });

            gsap.to('.panel', {
                xPercent: -100,
                scrollTrigger: {
                    trigger: '.pin-section',
                    pin: true,
                    scrub: true,
                    end: '+=2000',
                },
            });

            const panels = gsap.utils.toArray('.panels');
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.horizontal',
                    pin: true,
                    scrub: 1,
                    end: () => `+=${containerRef.current.offsetWidth}`,
                },
            });

            const mm = gsap.matchMedia();
            mm.add('(min-width: 1024px)', () => {
            // PC 전용 ScrollTrigger
                console.log("PC 전용")
            });

            mm.add('(max-width: 1023px)', () => {
            // 모바일 대체 인터랙션
                console.log("모바일 전용")
            });


        }, containerRef);
        return () => ctx.revert();
    }, []);

  return (
    <section ref={containerRef}>
      <div className="box" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="item" />
      <div className="pin-section">
        <div className="panel"></div>
      </div>
      <div className="horizontal">
        <div className="panels"></div>
        <div className="panels"></div>
        <div className="panels"></div>
        <div className="panels"></div>
        <div className="panels"></div>
        <div className="panels"></div>
        <div className="panels"></div>
      </div>
    </section>
  )
}

export default Section;