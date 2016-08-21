var path = require("path")
var express = require("express")
var webpack = require("webpack")
var config = require("./webpack.config.dev-server")
var webpackDevMiddleware = require("webpack-dev-middleware")
var webpackHotMiddleware = require("webpack-hot-middleware")


var port = config.devServer.port
var host = config.devServer.host


var compiler = webpack(config)
var appWebpackDevMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  historyApiFallback: true,
})
var appWebpackHotMiddleware = webpackHotMiddleware(compiler)


var app = express()
app.use(appWebpackDevMiddleware)
app.use(appWebpackHotMiddleware)
app.listen(port, host, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log(`Listening at http://${host}:${port}`)
  }
})
