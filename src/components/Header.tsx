import { FC } from "react";
import Link from "next/link";

const Header: FC<{}> = () => {
    return (
        <header>
            <h1>捻れたパピルス</h1>
            <Link href="/">
                <a>TOP</a>
            </Link>{" "}
            <Link href="/about">
                <a>ABOUT</a>
            </Link>{" "}
            <Link href="/gallery">
                <a>GALLERY</a>
            </Link>{" "}
            <Link href="/blog">
                <a>BLOG</a>
            </Link>{" "}
            <Link href="/link">
                <a>LINK</a>
            </Link>
        </header>
    );
};

export default Header;
