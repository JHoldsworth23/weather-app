const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: '/src/js-script/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.ttf$/,
                type: 'asset/resource',
            }
        ],
    },
}