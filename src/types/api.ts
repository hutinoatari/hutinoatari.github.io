export type ListContentsResponse<T> = {
    contents: T[];
    tptalCount: number;
    offset: number;
    limit: number;
}

export type ContentResponse<T> = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
} & T;

export type BlogResponse = ContentResponse<{
    title: string;
    body: string;
}>;

export type BlogListResponse = ListContentsResponse<BlogResponse>;