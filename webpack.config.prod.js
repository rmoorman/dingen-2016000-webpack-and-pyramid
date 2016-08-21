var path = require("path")
var webpack = require("webpack")
var CleanWebpackPlugin = require("clean-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var autoprefixer = require("autoprefixer")
var ManifestPlugin = require("webpack-manifest-plugin")
var StatsPlugin = require("stats-webpack-plugin")

var packageJson = require("./package.json")


var config = {
  entry: {
    main: [
      "./frontend/app",
    ],
    vendor: Object.keys(packageJson.dependencies),
  },
  output: {
    path: path.join(__dirname, "dingen", "static"),
    publicPath: "/static/",
    filename: "[name].[chunkhash].js",
  },
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, "dingen", "static", "*")]),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      // Extract bundle and manifest files. Manifest
      // is needed for reliable caching.
      names: ["vendor", "manifest"],
    }),
    new ExtractTextPlugin("[name].[chunkhash].css"),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
      },
    }),
    new ManifestPlugin(),
    new StatsPlugin("stats.json", {
      chunkModules: true,
      exclude: [ /node_modules[\\\/]/ ],
    }),
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
          ],
        },
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style", "css!postcss!stylus"),
        include: path.join(__dirname, "frontend"),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css!postcss"),
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
