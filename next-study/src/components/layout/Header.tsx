import Link from "next/link"
import styles from "@/styles/layout/header.module.scss;


export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Next Study</h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>   
            </ul>
        </header>
    )
}