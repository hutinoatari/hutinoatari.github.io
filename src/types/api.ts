export type ListContentsResponse<T> = {
    contents: T[];
    totalCount: number;
    offset: number;
    limit: number;
};

export type ContentResponse<T> = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
} & T;

export type TagResponse = ContentResponse<{
    name: string;
}>;

export type ArticleResponse = ContentResponse<{
    title: string;
    body: string;
    tag: ContentResponse<TagResponse>;
}>;

export type LinkResponse = ContentResponse<{
    title: string;
    url: string;
    author: string;
}>;

export type WorkResponse = ContentResponse<{
    name: string;
    image: {
        url: string;
        width: number;
        height: number;
    };
    caption: string;
}>;

export type ArticleListResponse = ListContentsResponse<ArticleResponse>;

export type TagListResponse = ListContentsResponse<TagResponse>;

export type LinkListResponse = ListContentsResponse<LinkResponse>;

export type WorkListResponse = ListContentsResponse<WorkResponse>;
