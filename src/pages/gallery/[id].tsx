import { FC } from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { client } from "../../libs/client";
import { WorkListResponse, WorkResponse } from "../../types/api";

interface Props {
    work: WorkResponse;
}

interface Params extends ParsedUrlQuery {
    id: string;
}

const WorkPage: FC<Props> = ({ work }) => {
    const descriptionHtml = work.caption.replace(/\n/g, "<br>");
    return (
        <>
            <Head>
                <title>{`${work.name} | 捻れたバベル`}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width" />
                <meta
                    name="description"
                    content="淵野アタリのポートフォリオサイトです。手芸やプログラミングの作品を公開しています。"
                />
                <meta name="author" content="淵野アタリ" />
                <meta name="og:title" content={`${work.name} | 捻れたバベル`} />
                <meta name="og:site_name" content="捻れたバベル" />
                <meta name="og:description" content={work.caption} />
                <meta name="og:image" content={work.image.url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@hutinoatari" />
            </Head>

            <h2>{work.name}</h2>
            <div>
                <img src={work.image.url} alt={`${work.name}の画像`} />
            </div>
            <p
                dangerouslySetInnerHTML={{
                    __html: descriptionHtml,
                }}
            />
        </>
    );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const data = await client.get<WorkListResponse>({
        endpoint: "works",
    });

    const paths = data.contents.map((content) => `/gallery/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
    params,
}) => {
    const { id } = params as Params;
    const data = await client.get<WorkResponse>({
        endpoint: "works",
        contentId: id,
    });

    return {
        props: {
            work: data,
        },
    };
};

export default WorkPage;
