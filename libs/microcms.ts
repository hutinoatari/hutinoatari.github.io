import { config } from "https://deno.land/x/dotenv/mod.ts";

const apikey = config().API_KEY ?? Deno.env.get("API_KEY");

interface Props {
    endpoint: string;
    options?: [string, string | number][];
    id?: string;
}

const getData = async ({
    endpoint,
    options = [],
    id,
}: Props) => {
    const query = options.map((e) => e.join("=")).join("&");
    const url = `https://hutinoatariblog.microcms.io/api/v1/${endpoint}${
        id ? `/${id}` : `?${query}`
    }`;
    const req = new Request(
        url,
        {
            method: "GET",
            headers: new Headers({
                "content-type": "application/json",
                "X-MICROCMS-API-KEY": apikey,
            }),
        },
    );
    const res = await fetch(req);
    const json = await res.json();
    return json;
};

export { getData };
