import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderTopSub = ({title}) => {
  const navigate = useNavigate();

  return (
    <div className="header-top-sub">
        <button type="button" className="prev" onClick={() => navigate(-1)}>이전</button>
        <h1>{title}</h1>
    </div>
      
  )
}

export default HeaderTopSub