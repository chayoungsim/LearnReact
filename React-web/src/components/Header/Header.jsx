import { useEffect, useRef } from 'react'
import HeaderTop from './HeaderTop'
import HeaderTopSub from './HeaderTopSub'

const Header = ({ variant = 'main', title }) => {

  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const isFixed = useRef(false);
  const OFFSET = 50;

  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;
    const onScroll = () => {
      const currentY = window.scrollY;

      // 스크롤 다운 → 고정
      if (currentY > OFFSET && currentY > lastScrollY.current && !isFixed.current) {
        headerEl.classList.add('is-fixed');
        isFixed.current = true;
      }

      // 최상단 근처 → 해제
      if (currentY <= OFFSET && isFixed.current) {
        headerEl.classList.remove('is-fixed');
        isFixed.current = false;
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };

  },[])

  return (
    <header className={`header header--${variant}`} ref={headerRef}>
        {variant === 'main' && <HeaderTop />}
        {variant === 'sub' && <HeaderTopSub title={title} />}
    </header>
  )
}

export default Header