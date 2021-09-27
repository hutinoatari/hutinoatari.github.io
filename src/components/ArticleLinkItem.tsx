import { FC } from "react";
import Link from "next/link";
import { dateToYYYYMMDD } from "../utils/util";

interface Props {
    id: string;
    title: string;
    publishedAt: string;
    tagName: string;
}

const ArticleItem: FC<Props> = ({ id, title, publishedAt, tagName }) => {
    return (
        <li>
            [{dateToYYYYMMDD(publishedAt)}]
            <Link href={`/blog/article/${id}`}>
                <a>{title}</a>
            </Link>
            ({tagName})
        </li>
    );
};

export default ArticleItem;
