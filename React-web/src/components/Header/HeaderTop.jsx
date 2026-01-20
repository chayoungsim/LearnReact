import { Link } from 'react-router-dom'

const HeaderTop = () => {
  return (
    <div className="header-top">
        <h1><Link to="/">로고</Link></h1>
        <Link to="/setting">설정</Link>
        <Link to="/medicine">복약</Link>
    </div>
  )
}

export default HeaderTop