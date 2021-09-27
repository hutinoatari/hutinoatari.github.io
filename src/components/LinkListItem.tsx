import { FC } from "react";
import ExternalLink from "./ExternalLink";

interface Props {
    title: string;
    url: string;
    author: string;
}

const LinkItem: FC<Props> = ({ title, url, author }) => {
    return (
        <li>
            <ExternalLink title={title} url={url} />({author})
        </li>
    );
};

export default LinkItem;
