import { FC } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header: FC<{}> = () => {
    return (
        <header>
            <h1 className={styles.title}>捻れたバベル</h1>
            <nav>
                <Link href="/">
                    <a>TOP</a>
                </Link>{" "}
                <Link href="/about">
                    <a>ABOUT</a>
                </Link>{" "}
                <Link href="/gallery">
                    <a>GALLERY</a>
                </Link>{" "}
                <Link href="/link">
                    <a>LINK</a>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
