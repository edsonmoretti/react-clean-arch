const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/main/index.tsx",
    output: {
        path: path.resolve(__dirname, "public/js"),
        publicPath: "/public/js",
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        writeToDisk: true,
        historyApiFallback: true,
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
}
