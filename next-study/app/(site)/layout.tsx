// 서브 공통 레이아웃



export default function SiteLayout({children}:Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <div className="subContainer">{children}</div>
        </>
    )
}