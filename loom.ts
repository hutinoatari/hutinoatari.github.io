const cover = (head: string, body: string) =>
    `<!DOCTYPE html><html lang="ja"><head>${head}</head><body><header><h1>淵野アタリ</h1><nav><ul><li><a href="./index.html">概要</a></li><li><a href="./work.html">作品</a></li></ul></nav></header><main>${body}</main><footer><p><small>&copy;2016 淵野アタリ</small></p></footer></body></html>`;

export { cover };
