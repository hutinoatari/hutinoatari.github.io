import { FC } from "react";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExternalLink from "../components/ExternalLink";
import { client } from "../libs/client";
import { LinkListResponse, LinkResponse } from "../types/api";

interface Props {
    links: LinkResponse[];
}

const LinkPage: FC<Props> = ({ links }) => {
    return (
        <>
            <PageHead title="LINK" />

            <h2>LINK</h2>
            <ul>
                {links.map((link: LinkResponse) => (
                    <li key={link.id}>
                        <ExternalLink title={link.title} url={link.url} />(
                        {link.author})
                    </li>
                ))}
            </ul>
        </>
    );
};

export const getStaticProps = async () => {
    const data = await client.get<LinkListResponse>({
        endpoint: "links",
        queries: { limit: 256 },
    });
    return {
        props: {
            links: data.contents,
        },
    };
};

export default LinkPage;
