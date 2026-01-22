// 사이트 공통 레이아웃
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export default function SiteLayout({children}:Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <div id="container">
                <div className="contents">{children}</div>
            </div>
            <Footer />
        </>
    )
}