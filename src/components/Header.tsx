import { FC } from "react";
import Link from "next/link";

interface Props {
    title?: string;
}

const Header: FC<Props> = ({ title, children }) => {
    return (
        <header>
            {!title ? (
                <h1>淵野アタリのブログ</h1>
            ) : (
                <>
                    <h1>{title}</h1>
                    <Link href="/">
                        <a>ブログトップに戻る</a>
                    </Link>
                </>
            )}
            {children}
        </header>
    );
};

export default Header;
