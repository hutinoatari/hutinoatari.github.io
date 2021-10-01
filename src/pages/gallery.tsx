import { FC } from "react";
import Link from "next/link";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "../libs/client";
import { WorkListResponse, WorkResponse } from "../types/api";

interface Props {
    works: WorkResponse[];
}

const GalleryPage: FC<Props> = ({ works }) => {
    return (
        <>
            <PageHead title="GALLERY" />
            <Header />
            <main>
                <h2>LINK</h2>
                <ul>
                    {works.map((work: WorkResponse) => (
                        <li key={work.id}>
                            <Link href={`/gallery/${work.id}`}>
                                <a>{work.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </>
    );
};

export const getStaticProps = async () => {
    const data = await client.get<WorkListResponse>({ endpoint: "works" });
    return {
        props: {
            works: data.contents,
        },
    };
};

export default GalleryPage;
