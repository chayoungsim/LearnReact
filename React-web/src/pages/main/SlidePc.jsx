import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


  const slides = [
    {
      id: 1,
      title: '슬라이드 1',
      bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      content: '첫 번째 슬라이드'
    },
    {
      id: 2,
      title: '슬라이드 2',
      bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      content: '두 번째 슬라이드'
    },
    {
      id: 3,
      title: '슬라이드 3',
      bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      content: '세 번째 슬라이드'
    },
    {
      id: 4,
      title: '슬라이드 4',
      bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      content: '네 번째 슬라이드'
    }
  ];


const SlidePc = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
            gsap.from(".news-item", {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 0.5,
            });
        }, sectionRef);

        return () => ctx.revert();
  },[])

  return (
    <section ref={sectionRef}>
        <h1>PC</h1>
        <div className="news-items">
          {
            slides.map((slide) => (
              <div className="news-item" key={slide.id} ref={itemRefs} style={{ background: slide.bg }}>{slide.title}</div>
            ))
          }           
        </div>
    </section>
  )
}

export default SlidePc