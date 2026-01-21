import { Link } from "react-router-dom";

const HeaderTop = () => {
    return (
        <div className="header-top">
            <h1>
                <Link to="/">로고</Link>
            </h1>
            <button type="button">메뉴</button>
            <nav>
                <ul>
                    <li>
                        <Link to="/medicine">복약 관리</Link>
                    </li>
                    <li>
                        <Link to="/setting">설정</Link>
                    </li>
                    <li>
                        <Link to="/health">내건강</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderTop;
