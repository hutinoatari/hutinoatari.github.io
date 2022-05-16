const path = require("path");

module.exports = {
    sassOptions: {
        includePath: [path.join(__dirname, "styles")],
    },
    images: {
        domains: ["images.microcms-assets.io"],
    },
};
