const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'initillu.js'
	},
    module: {
        rules: [
            {
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader",
            },
            {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
                }
            }
            }
        ]
    }
}
