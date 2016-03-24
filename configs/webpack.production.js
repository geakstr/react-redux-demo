var path = require("path");
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");

var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var root = path.join(__dirname, "../");

var paths = {
  root: root,
  base: path.join(root, "html/prod"),
  www: path.join(root, "www"),
  js: path.join(root, "js"),
  sass: path.join(root, "sass"),
  html: path.join(root, "html/prod")
};

module.exports = {
  context: paths.js,
  entry: {
    app: "index.js",
    vendor: ["axios", "babel-polyfill", "react", "react-addons-css-transition-group", "react-dom", "react-redux",
      "react-router", "react-router-redux", "redux", "redux-actions", "redux-promise", "redux-thunk"]
  },
  output: {
    path: paths.www,
    filename: "app.js"
  },
  resolve: {
    root: [paths.js],
    extensions: ["", ".js"]
  },
  devtool: "source-map",
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel"]
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style", "css!postcss!sass")
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: "file?hash=sha512&digest=hex&name=/assets/imgs/[hash].[ext]"
    }]
  },
  postcss: [autoprefixer({ browsers: ["last 2 versions"] })],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      mangle: true,
      output: {
        comments: false
      },
      compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        comparisons: true,
        booleans: true,
        unused: true,
        loops: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(paths.html, "index.html"),
      inject: false,
      chunks: ["app"]
    }),
    new ExtractTextPlugin("/assets/style.css")
  ]
};