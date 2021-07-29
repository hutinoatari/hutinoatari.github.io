import {FC} from "react";
import Head from "next/head";
import {client} from "../../libs/client";
import {BlogListResponse, BlogResponse} from "../../types/api";

interface Props {
    blog: BlogResponse;
}

const Top: FC<Props> = ({blog}) => {
    return (
        <>
        <Head>
            <meta name="og:title" content={blog.title} />
            <meta name="twitter:card" content="summary" />
        </Head>
        <h1>{blog.title}</h1>
        <main dangerouslySetInnerHTML={{__html: `${blog.body}`}} />
        </>
    );
};

export const getStaticPaths = async () => {
    const data = await client.get<BlogListResponse>({endpoint: "blog"});

    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return {paths, fallback: false};
}

export const getStaticProps = async ({params}) => {
    const {id} = params;
    console.log(id)
    const data = await client.get<BlogResponse>({endpoint: "blog", contentId: id});

    return {
        props: {
            blog: data,
        }
    };
};

export default Top;