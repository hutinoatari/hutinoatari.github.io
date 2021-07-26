import {FC} from "react";
import {client} from "../../libs/client";
import {BlogListResponse, BlogResponse} from "../../types/api";

interface Props {
    blog: BlogResponse;
}

const Top: FC<Props> = ({blog}) => {
    return (
        <>
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
    console.log(params)
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