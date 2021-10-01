import { FC } from "react";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkListItem from "../components/LinkListItem";
import { client } from "../libs/client";
import { LinkListResponse, LinkResponse } from "../types/api";

interface Props {
    links: LinkResponse[];
}

const LinkPage: FC<Props> = ({ links }) => {
    return (
        <>
            <PageHead title="LINK" />
            <Header />
            <main>
                <h2>LINK</h2>
                <ul>
                    {links.map((link: LinkResponse) => (
                        <LinkListItem
                            title={link.title}
                            url={link.url}
                            author={link.author}
                            key={link.id}
                        />
                    ))}
                </ul>
            </main>
            <Footer />
        </>
    );
};

export const getStaticProps = async () => {
    const data = await client.get<LinkListResponse>({ endpoint: "links" });
    return {
        props: {
            links: data.contents,
        },
    };
};

export default LinkPage;
