const configureAPI = require('./server/api')

module.exports = {
    configureWebpack: {
        devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
        devServer: {
            before: configureAPI,
            headers: { 'Access-Control-Allow-Origin': '*' }
        }
    },
    css: {
        sourceMap: process.env.NODE_ENV === 'development'
    }
}