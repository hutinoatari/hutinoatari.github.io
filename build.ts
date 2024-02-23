import { ensureDir, ensureFile, walk } from "fs/mod.ts";
import { format, parse } from "path/mod.ts";
import { cheeseTownToHtml } from "./cheeseTown.ts";
import { cover } from "./loom.ts";

const fromDir = "src";
const toDir = "dist";

await ensureDir(toDir);
await Deno.remove(toDir, { recursive: true });
const files = walk(fromDir);
for await (const file of files) {
    if (!file.isFile) continue;
    const { root, dir, ext, name } = parse(file.path);
    if (ext !== ".cheesetown") {
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
    const text = await Deno.readTextFile(`./${file.path}`);
    const outputPath = format({
        root,
        dir: dir.replace(fromDir, toDir),
        ext: ".html",
        name,
    });
    const html = cover("", cheeseTownToHtml(text));
    await ensureFile(outputPath);
    await Deno.writeTextFileSync(outputPath, html);
    console.log(`generate: ${outputPath}`);
}
