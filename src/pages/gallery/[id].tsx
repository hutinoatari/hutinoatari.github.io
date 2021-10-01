import { FC } from "react";
import PageHead from "../../components/PageHead";
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
    return (
        <>
            <PageHead title={work.name} />
            
            <div>
                <img src={work.image.url} alt="" />
            </div>
            <h2>{work.name}</h2>
            <p>{work.caption}</p>
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
    const { id } = params ?? { id: "" };
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
