"use client";

import Link from "next/dist/client/link";
import{ useEffect, useState, useRef } from "react";



export default function Header() {  
    const [isFixed, setIsFixed] = useState(false);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsFixed(currentScrollY > 50);
            if(currentScrollY > window.innerHeight * 0.2) {
                if(currentScrollY > lastScrollY.current) {
                    setIsHeaderHidden(true);
                } else {
                    setIsHeaderHidden(false);
                }
            } else {
                setIsHeaderHidden(false);
            }
            lastScrollY.current = currentScrollY;
           
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[])

    return (
        <header className={`site-header` + (isFixed ? " fixed" : "") + (isHeaderHidden ? " hide" : "")}>
            <div className="header-inner">
                <h1 className="logo"><Link href="/">Next.js</Link></h1>
                <nav className="gnb">
                    <Link href="/docs">Docs</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/templates">Templates</Link>
                </nav>
            </div>
        </header>
    )   
}