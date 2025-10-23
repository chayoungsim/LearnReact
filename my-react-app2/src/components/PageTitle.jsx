import { useLocation } from 'react-router-dom';

const titleMap = {
    '/company': '기업정보',
    '/sustainability': '지속가능경영',
    '/energy': '사업소개', 
    '/recruit': '인재채용',
};

export default function PageTitle() {
    const location = useLocation();
    // 예: /company/summary -> /company
    const mainPath = '/' + location.pathname.split('/')[1];
    const title = titleMap[mainPath] || '페이지';

    return (
        <div className="sub-top-title">                
            <h2 className="sub-title2">{title}</h2>              
        </div>
    )
}