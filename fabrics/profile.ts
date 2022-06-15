import { addNode, document, Fabric } from "../loom.ts";
import Metas from "../fibers/Metas.ts";

const ProfilePage: Fabric<{}> = async () => {
    const metas = await Metas();
    const title = document.createElement("title");
    title.textContent = "ABOUT | 捻れたバベル";

    const h2 = document.createElement("h2");
    h2.textContent = "PROFILE";
    const dl = document.createElement("dl");
    [
        ["名前", "淵野アタリ"],
        ["サークル", "捻れたバベル"],
        ["Twitter", "@hutinoatari"],
        ["GitHub", "hutinoatari"],
        ["HP", "hutinoatari.dev"],
    ].forEach((e) => {
        const dt = document.createElement("dt");
        dt.textContent = e[0];
        const dd = document.createElement("dd");
        dd.textContent = e[1];
        addNode(dl, [dt, dd]);
    });

    return {
        head: [...metas, title],
        body: [h2, dl],
    };
};

export default ProfilePage;
