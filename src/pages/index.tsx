import {FC} from "react";
import Link from "next/link";
import {client} from "../libs/client";
import {BlogListResponse, BlogResponse} from "../types/api";

interface Props {
    blog: BlogResponse[];
}

const Top: FC<Props> = ({blog}) => {
    return (
        <>
        <h1>淵野アタリのブログ</h1>
        <ul>
            {blog.map((blog: BlogResponse) => (<li key={blog.id}><Link href={`/blog/${blog.id}`}><a>{blog.title}</a></Link></li>))}
        </ul>
        </>
    );
};

export const getStaticProps = async () => {
    const data = await client.get<BlogListResponse>({endpoint: "blog"});

    return {
        props: {
            blog: data.contents,
        }
    };
};

export default Top;