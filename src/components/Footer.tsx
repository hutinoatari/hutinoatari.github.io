import { FC } from "react";
import styles from "../styles/Layout.module.scss";

const Footer: FC<{}> = () => {
    return (
        <footer className={styles.center}>
            <p>
                <small>&copy;2016 淵野アタリ</small>
            </p>
        </footer>
    );
};

export default Footer;
