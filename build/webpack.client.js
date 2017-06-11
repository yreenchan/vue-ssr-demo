const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')


module.exports = merge(baseConfig, {
    entry: '../src/entry-client.js',
    output: {
        filename: 'client.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),
        new VueSSRClientPlugin()
    ]
})