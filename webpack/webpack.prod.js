const DotenvWebpackPlugin = require('dotenv-webpack')
const webpack = require('webpack')
module.exports = {
    mode: 'production',
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BASE_URL': JSON.stringify('http://example.com')
        }),
        new DotenvWebpackPlugin({path: ".env.prod"})

    ]
}