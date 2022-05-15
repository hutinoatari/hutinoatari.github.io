import { Link } from "aleph/react";

const Header = () => {
    return (
        <header>
            <h1>捻れたバベル</h1>
            <nav>
                <Link to="/">Top</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
};

export default Header;
