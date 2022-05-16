import { FC } from "react";
import Link from "next/link";
import styles from "../styles/Layout.module.scss";

const Header: FC<{}> = () => {
    return (
        <header>
            <h1 className={styles.center}>捻れたバベル</h1>
            <nav className={styles.center}>
                <ul className={styles.list}>
                    <li>
                        <Link href="/">
                            <a>TOP</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>ABOUT</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery">
                            <a>GALLERY</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/link">
                            <a>LINK</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
