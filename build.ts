import {
    ensureDir,
    ensureFile,
    walk,
} from "https://deno.land/std@0.139.0/fs/mod.ts";
import { format, parse } from "https://deno.land/std@0.139.0/path/mod.ts";
import { Page } from "./document.ts";
import { document } from "./loom.ts";

const fromDir = "fabrics";
const toDir = "dist";

await ensureDir(toDir);
await Deno.remove(toDir, { recursive: true });
const files = walk(fromDir);
for await (const file of files) {
    if (!file.isFile) continue;
    const { root, dir, ext, name } = parse(file.path);
    if (ext !== ".ts") {
        const outputPath = format({
            root,
            dir: dir.replace(fromDir, toDir),
            ext,
            name,
        });
        await ensureFile(outputPath);
        await Deno.copyFile(file.path, outputPath);
        console.log(`copied  : ${outputPath}`);
        continue;
    }
    const { default: fabric, nozzle } = await import(`./${file.path}`);
    if (nozzle) {
        const ids = await nozzle();
        await Promise.all(ids.map(async (id) => {
            const outputPath = format({
                root,
                dir: dir.replace(fromDir, toDir),
                ext: ".html",
                name: id,
            });
            const doms = await fabric({ currentURL: outputPath, id });
            const htmlPart = await Page(doms);
            const div = document.createElement("div");
            div.appendChild(htmlPart);
            const html = "<!DOCTYPE html>" + div.innerHTML;
            await ensureFile(outputPath);
            await Deno.writeTextFileSync(outputPath, html);
            console.log(`generate: ${outputPath}`);
        }));
    } else {
        const outputPath = format({
            root,
            dir: dir.replace(fromDir, toDir),
            ext: ".html",
            name,
        });
        const doms = await fabric({ currentURL: outputPath });
        const htmlPart = await Page(doms);
        const div = document.createElement("div");
        div.appendChild(htmlPart);
        const html = "<!DOCTYPE html>" + div.innerHTML;
        await ensureFile(outputPath);
        await Deno.writeTextFileSync(outputPath, html);
        console.log(`generate: ${outputPath}`);
    }
}
