import { FC } from "react";
import Link from "next/link";
import { dateToYYYYMMDD } from "../utils/util";
import styles from "../styles/articleItem.module.scss";

interface Props {
    id: string;
    title: string;
    publishedAt: string;
    tagName: string;
    tagId: string;
}

const ArticleItem: FC<Props> = ({ id, title, publishedAt, tagName, tagId }) => {
    return (
        <article className={styles.articleItemSection}>
            <h3>
                <Link href={`/blog/article/${id}`}>
                    <a>{title}</a>
                </Link>
            </h3>
            <p>
                タグ:{" "}
                <Link href={`/blog/tag/${tagId}`}>
                    <a>{tagName}</a>
                </Link>
            </p>
            <p>{dateToYYYYMMDD(publishedAt)}</p>
        </article>
    );
};

export default ArticleItem;
