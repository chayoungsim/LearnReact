import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Footer/BottomNav";

const Layout = () => {
  const location = useLocation();

  // 경로에 따라 Header의 모양(variant)과 제목(title) 결정
  const getHeaderProps = (pathname) => {
    if (pathname === "/medicine") return { variant: "sub", title: "복약 관리" };
    if (pathname === "/setting") return { variant: "sub", title: "설정" };
    return { variant: "main", title: "" };
  };

  const { variant, title } = getHeaderProps(location.pathname);

  return (
    <>
      <p id="accessibility">
        <a href="#contents">본문바로가기</a>
      </p>
      <Header variant={variant} title={title} />
      <div id="container">
        <Outlet />
      </div>
      <Footer />
      <BottomNav />
    </>
  );
};

export default Layout;
