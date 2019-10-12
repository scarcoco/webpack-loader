const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const distPath = path.resolve(__dirname, 'dist')

const mode = process.env.NODE_ENV || 'development'

module.exports = {
    // production | development | node
    // 不同 mode, 默认开启的插件不一样 https://webpack.docschina.org/concepts/mode/#%E7%94%A8%E6%B3%95
    mode: mode,

    entry: {
        app: './src/app.js'
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js', 
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/template.html'
        })
    ]
};