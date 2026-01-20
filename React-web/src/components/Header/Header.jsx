import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderTopSub from './HeaderTopSub'

const Header = ({ variant = 'main', title }) => {
  return (
    <header className={`header header--${variant}`}>
        {variant === 'main' && <HeaderTop />}
        {variant === 'sub' && <HeaderTopSub title={title} />}
    </header>
  )
}

export default Header