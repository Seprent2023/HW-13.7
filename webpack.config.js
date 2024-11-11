const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/js/index.js',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader",]
            }
        ]
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
    }
}