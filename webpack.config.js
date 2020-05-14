const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: ["@babel/polyfill", './src/index.jsx'],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',
                              '@babel/react',{
                              'plugins': ['@babel/plugin-proposal-class-properties']}]
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                },]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    devServer: {
        hot: true,
        historyApiFallback: true,
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    }
}
