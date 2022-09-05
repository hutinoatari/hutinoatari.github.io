import { FC } from "react";
import styles from "../styles/Layout.module.scss";

const Footer: FC<{}> = () => {
    return (
        <footer className={styles.center}>
            <p>
                <small>(C)2021 淵野アタリ</small>
            </p>
        </footer>
    );
};

export default Footer;
