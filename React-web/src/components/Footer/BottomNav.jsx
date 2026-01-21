import React from 'react'

const BottomNav = () => {
  return (
    <div className="bottom-nav">
        <button type="button"><i className="ico-cart"></i><span>쇼핑</span></button>
        <button type="button">
        <i className="ico-hbot"></i><span>건강봇</span>
        </button>
        <button type="button">
        <i className="ico-myh"></i><span>내 건강</span>
        </button>
        <button type="button">
        <i className="ico-more"></i><span>더보기</span>
        </button>
    </div>
  )
}

export default BottomNav