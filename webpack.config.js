const nodeExternals = require("webpack-node-externals");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve("src", "index.ts"),
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.ts'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'tsconfig.json'),
                    },
                },
            },
        ],
    },
};