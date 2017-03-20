var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.js')
var compiler = webpack(config)
var server = new WebpackDevServer(compiler, {
  contentBase: __dirname + '/build',
  publicPath: "/assets/",
  filename: "bundle.js"
})
server.listen(process.env.PORT, () => {
  console.log('App listening on port ' + process.env.PORT)
})
