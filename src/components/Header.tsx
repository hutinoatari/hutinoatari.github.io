import { FC } from "react";
import Link from "next/link";
import ExternalLink from "./ExternalLink";
import styles from "../styles/style.module.scss";

const Header: FC<{}> = () => {
    return (
        <header>
            <h1 className={styles.center}>捻れたバベル</h1>
            <nav className={styles.center}>
                <Link href="/">
                    <a>TOP</a>
                </Link>{" "}
                <Link href="/about">
                    <a>ABOUT</a>
                </Link>{" "}
                <Link href="/gallery">
                    <a>GALLERY</a>
                </Link>{" "}
                <ExternalLink
                    title="BLOG"
                    url="https://hutinoatari.github.io/"
                />{" "}
                <Link href="/link">
                    <a>LINK</a>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
