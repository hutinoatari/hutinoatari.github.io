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

export type LinkListResponse = ListContentsResponse<LinkResponse>;

export type WorkListResponse = ListContentsResponse<WorkResponse>;
