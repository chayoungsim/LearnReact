import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderTop = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="header-top">
            <h1>
                <Link to="/">로고</Link>
            </h1>
            <button
                type="button"
                className={`hamburger-modern ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label="메뉴 열기"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={isMenuOpen ? 'open' : ''}>
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
