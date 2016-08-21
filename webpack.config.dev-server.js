var path = require("path")
var webpack = require("webpack")
var autoprefixer = require("autoprefixer")


var port = 7770
var host = "localhost"


var config = {
  entry: [
    `webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr`,
    "./frontend/app",
  ],
  output: {
    path: path.join(__dirname, "dingen", "static"),
    publicPath: `http://${host}:${port}/static/`,
    filename: "[name].js",
  },
  devtool: "eval-source-map",
  devServer: {
    port: port,
    host: host,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        include: path.join(__dirname, "frontend"),
				babelrc: false,
        query: {
          presets: ["es2015", "stage-0", "react"],
          plugins: [
            ["transform-object-rest-spread"],
            ["transform-react-display-name"],
            ["react-transform", {
              "transforms": [
                {
                  "transform": "react-transform-hmr",
                  "imports": ["react"],
                  "locals": ["module"],
                },
                {
                  "transform": "react-transform-catch-errors",
                  "imports": ["react", "redbox-react"],
                },
              ],
            }],
          ],
        },
      },
      {
        test: /\.styl$/,
        loader: "style!css!postcss!stylus",
        include: path.join(__dirname, "frontend"),
      },
      {
        test: /\.css$/,
        loader: "style!css!postcss",
        include: path.join(__dirname, "frontend"),
      },
    ],
  },
  postcss: [
    autoprefixer({
      browser: "last 3 versions",
    }),
  ],
}


module.exports = config
