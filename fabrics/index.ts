import { Fabric } from "../type.ts";

const TopPage: Fabric = async () => {
    return {
        head: `<link rel="stylesheet" href="./style.css">`,
        body: `<p>工事中......</p>`,
    };
};

export default TopPage;
