import { FC } from "react";
import Link from "next/link";

const Header: FC<{}> = () => {
    return (
        <header>
            <h1>淵野アタリのブログ</h1>
            <Link href="/">
                <a>TOP</a>
            </Link>{" "}
            <Link href="/link">
                <a>LINK</a>
            </Link>
        </header>
    );
};

export default Header;
