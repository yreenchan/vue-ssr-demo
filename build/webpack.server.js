const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')


module.exports = merge(baseConfig, {
    entry: './src/entry-server.js',
    target: 'node',
    output: {
        filename: 'server.bundle.js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new VueSSRServerPlugin()
    ]
})