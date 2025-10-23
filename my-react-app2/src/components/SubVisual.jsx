import { useLocation } from 'react-router-dom';

export default function SubVisual() {
    const location = useLocation();
    const pathParts = location.pathname.split('/');
    // 예: /company/summary -> 'summary'
    const pageIdentifier = pathParts[pathParts.length - 1];
    const visualClass = `sub-vs-${pageIdentifier}`;

    return(
        <div className={`sub-visual ${visualClass}`}>
            <div className="static">
                <span className="blind">서브 비주얼 영역</span>
            </div>
        </div>
    )
}