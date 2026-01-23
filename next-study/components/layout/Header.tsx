"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import styles from "@/styles/layout/header.module.scss";

export default function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isGnbHover, setIsGnbHover] = useState(false);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsFixed(currentScrollY > 50);

            // 스크롤 방향에 따른 헤더 숨김/표시 로직
            if (currentScrollY > window.innerHeight * 0.2) {
                if (currentScrollY > lastScrollY.current) {
                    // 스크롤 다운
                    setIsHeaderHidden(true);
                } else {
                    // 스크롤 업
                    setIsHeaderHidden(false);
                }
            } else {
                setIsHeaderHidden(false);
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isActive) {
            document.documentElement.classList.add("not-scroll");
        } else {
            document.documentElement.classList.remove("not-scroll");
        }
        return () => document.documentElement.classList.remove("not-scroll");
    }, [isActive]);

    return (
        <header
            id="header"
            className={`${styles.header} ${isFixed ? styles.fixed : ""} ${isGnbHover ? styles["showGnb"] : ""} ${isHeaderHidden ? styles.hide : ""}`}
        >
            <div className={styles.siteHeader}>
                <div className={styles.static}>
                    <h1 className={styles.brand}>
                        <Link href="/">Logo</Link>
                    </h1>
                    <nav className={styles.nav}>
                        <ul
                            className={styles.gnb}
                            onMouseEnter={() => setIsGnbHover(true)}
                            onMouseLeave={() => setIsGnbHover(false)}
                        >
                            <li>
                                <Link href="/">
                                    <span>Home</span>
                                </Link>
                                <div className={styles.submenu}>
                                    <ul>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link href="/about">
                                    <span>About</span>
                                </Link>
                                <div className={styles.submenu}>
                                    <ul>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.utils}>
                        <button
                            type="button"
                            className={`${styles.hamburgerModern} ${isActive ? styles.active : ""}`}
                            aria-label="메뉴 열기"
                            onClick={() => setIsActive(!isActive)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            <aside className={`${styles.modalInHeader} ${isActive ? styles.active : ""}`}>
                <div className={styles.sitemap}>
                    <div className={styles.scrollArea}>
                        <div className={styles.sitemapHeader}>
                            <a href="">Logo</a>
                            <button
                                type="button"
                                className={styles.close}
                                onClick={() => setIsActive(false)}
                            >
                                닫기
                            </button>
                        </div>
                        <div className={styles.sitemapContent}>pc menu</div>
                    </div>
                </div>
                <div className={styles.mobile}>
                    <div className={styles.scrollArea}>
                        <div className={styles.sitemapHeader}>
                            <a href="">Logo</a>
                            <button
                                type="button"
                                className={styles.close}
                                onClick={() => setIsActive(false)}
                            >
                                닫기
                            </button>
                        </div>
                        <div className={styles.sitemapContent}>mo menu</div>
                    </div>
                </div>
            </aside>
        </header>
    );
}
