const path = require("path");

module.exports = {
    entry:"./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist"),
        assetModuleFilename: "images/[hash][ext]",
        clean: true
    },
    module: {
        rules: [
            {
                test: /.(css)$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader", options:{modules: true}}
                ]
            },
            {
                test: /.(jpeg|png|gif|svg)$/,
                type: "asset/resource"
            }
        ]
    }
}