import { FC } from "react";
import Link from "next/link";
import PageHead from "../components/PageHead";
import { client } from "../libs/client";
import { WorkListResponse, WorkResponse } from "../types/api";

interface Props {
    works: WorkResponse[];
}

const GalleryPage: FC<Props> = ({ works }) => {
    return (
        <>
            <PageHead title="GALLERY" />

            <h2>GALLERY</h2>
            <ul>
                {works.map((work: WorkResponse) => (
                    <li key={work.id}>
                        <Link href={`/gallery/${work.id}`}>
                            <a>{work.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export const getStaticProps = async () => {
    const data = await client.get<WorkListResponse>({
        endpoint: "works",
        queries: { limit: 1024 },
    });
    return {
        props: {
            works: data.contents,
        },
    };
};

export default GalleryPage;
