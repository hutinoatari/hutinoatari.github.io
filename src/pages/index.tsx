import { FC } from "react";
import PageHead from "../components/PageHead";
import Link from "next/link";
import { client } from "../libs/client";
import { WorkListResponse, WorkResponse } from "../types/api";

interface Props {
    works: WorkResponse[];
}

const TopPage: FC<Props> = ({ works }) => {
    return (
        <>
            <PageHead />

            <section>
                <h2>概要</h2>
                <p>
                    淵野アタリの手芸サークル。靴紐手芸やフロントエンド開発を行っている。
                </p>
                <p>
                    <Link href="/profile">
                        <a>プロフィール</a>
                    </Link>
                </p>
            </section>

            <section>
                <h2>作品</h2>
                <ul>
                    {works.map((work: WorkResponse) => (
                        <li key={work.id}>
                            <Link href={`/gallery/${work.id}`}>
                                <a>{work.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <p>
                    <Link href="/gallery">
                        <a>もっと見る</a>
                    </Link>
                </p>
            </section>
        </>
    );
};

export const getStaticProps = async () => {
    const data = await client.get<WorkListResponse>({
        endpoint: "works",
        queries: { limit: 3 },
    });

    return {
        props: {
            works: data.contents,
        },
    };
};

export default TopPage;
