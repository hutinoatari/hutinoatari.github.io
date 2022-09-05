import { FC } from "react";

interface Props {
    title: string;
    url: string;
}

const ExternalLink: FC<Props> = ({ title, url }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            {title}
        </a>
    );
};

export default ExternalLink;
