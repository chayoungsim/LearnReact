import { useLocation, NavLink } from 'react-router-dom';

const menuData = {
    '/company': {
        title: '기업정보',
        sub: [
            { name: '회사소개', path: '/company/summary' },
            { name: '브랜드', path: '/company/brand' },
        ]
    },
    '/sustainability': {
        title: '지속가능경영',
        sub: [
            { name: 'ESG', path: '/sustainability/esg' },
        ]
    },
    '/energy': {
        title: '사업소개',
        sub: [
            { name: '저탄소 LNG', path: '/energy/lowCarbonLng' },
            { name: '신재생에너지', path: '/energy/renewable' },
        ]
    },
    '/recruit': {
        title: '인재채용',
        sub: [
            { name: '복리후생', path: '/recruit/welfare' },
            { name: '인재육성', path: '/recruit/cultivation' },
        ]
    }
};

export default function SubLnb(){
    const location = useLocation();
    const mainPath = '/' + location.pathname.split('/')[1];
    const currentMenu = menuData[mainPath];

    if (!currentMenu) return null; 

    // 현재 경로에 맞는 서브메뉴 항목 찾기
    const activeSubMenu = currentMenu.sub.find(item => item.path === location.pathname);
    const buttonTitle = activeSubMenu ? activeSubMenu.name : currentMenu.title;

    return(
        <div className="sub-lnb">
          <div className="static">
              <button type="button">{buttonTitle}</button> 
              <nav>
                  <ul className="lnb">
                      {currentMenu.sub.map((item) => (
                        <li key={item.path}>
                            <NavLink to={item.path}>{item.name}</NavLink>
                        </li>
                      ))}
                  </ul>
              </nav> 
          </div>
      </div>   
    )
}