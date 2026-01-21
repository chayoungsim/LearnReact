import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderTopSub = ({title}) => {
  const navigate = useNavigate();

  return (
    <div className="header-top-sub">
        <button type="button" className="btn-back" onClick={() => navigate(-1)}>
            <i className="ico-back"></i><span className="sr-only">이전</span>
        </button>        
        <h1>{title}</h1>
    </div>
      
  )
}

export default HeaderTopSub