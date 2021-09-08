import { FC } from "react";

interface Props {
    pageTitle: string;
    url: string;
}

const LinkItem: FC<Props> = ({ pageTitle, url }) => {
    return (
        <li>
            <a href={url} target="_blank" rel="noreferrer">
                {pageTitle}
            </a>
        </li>
    );
};

export default LinkItem;
