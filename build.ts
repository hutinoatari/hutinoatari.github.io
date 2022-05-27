import {
    ensureDir,
    ensureFile,
    walk,
} from "https://deno.land/std@0.139.0/fs/mod.ts";
import { dirname, extname } from "https://deno.land/std@0.139.0/path/mod.ts";
import { Page } from "./document.ts";
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

await ensureDir("./dist");
await Deno.remove("./dist", { recursive: true });
const files = walk(`./fabrics`);
for await (const file of files) {
    if (file.isFile) {
        const ext = extname(file.path);
        if (ext === ".ts") {
            const document = new DOMParser().parseFromString("", "text/html");
            const { default: fabric, nozzle } = await import("./" + file.path);
            if (nozzle) {
                const paths = await nozzle();
                for await (const path of paths) {
                    const { head, body } = await fabric(path);
                    const htmlPart = await Page(head, body);
                    const div = document.createElement("div");
                    div.appendChild(htmlPart);
                    const html = "<!DOCTYPE html>" + div.innerHTML;
                    const outputPath = `${
                        dirname(file.path.replace("fabrics", "dist"))
                    }/${path}.html`;
                    await ensureFile(outputPath);
                    await Deno.writeTextFileSync(outputPath, html);
                    console.log(`generate: ${outputPath}`);
                }
            } else {
                const { head, body } = await fabric();
                const htmlPart = await Page(head, body);
                const div = document.createElement("div");
                div.appendChild(htmlPart);
                const html = "<!DOCTYPE html>" + div.innerHTML;
                const outputPath =
                    file.path.replace("fabrics", "dist").slice(0, -3) + ".html";
                await ensureFile(outputPath);
                await Deno.writeTextFileSync(outputPath, html);
                console.log(`generate: ${outputPath}`);
            }
        } else {
            const outputPath = file.path.replace("fabrics", "dist");
            await ensureFile(outputPath);
            await Deno.copyFile(file.path, outputPath);
            console.log(`copied  : ${outputPath}`);
        }
    }
}
