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
                <h2>サイト説明</h2>
                <p>淵野アタリのポートフォリオサイト。</p>
                <p>
                    <Link href="/about">
                        <a>もっと見る</a>
                    </Link>
                </p>
            </section>

            <section>
                <h2>最新3作品</h2>
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
