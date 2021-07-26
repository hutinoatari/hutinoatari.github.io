import {createClient} from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "hutinoatariblog",
    apiKey: process.env.API_KEY ?? "",
});