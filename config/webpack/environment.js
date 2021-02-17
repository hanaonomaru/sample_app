const { environment } = require('@rails/webpacker')

//　追記
const webpack = require('webpack')
environment.plugins.prepend('Provide',
    new webpack.ProvidePlugin({
        $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery'
    }))
// 追記終わり

module.exports = environment
