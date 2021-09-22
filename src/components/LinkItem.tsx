import { FC } from "react";
import ExternalLink from "./ExternalLink";
import styles from "../styles/linkItem.module.scss";

interface Props {
    title: string;
    url: string;
    author: string;
}

const LinkItem: FC<Props> = ({ title, url, author }) => {
    return (
        <section className={styles.linkItemSection}>
            <h3>
                <ExternalLink title={title} url={url} />
            </h3>
            <p>{author}</p>
        </section>
    );
};

export default LinkItem;
