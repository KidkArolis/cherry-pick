var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./index",
  output: {
    path: "dist",
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "react-route": __dirname + "/lib/react-route"
    },
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"development"'})
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "6to5?modules=commonInterop" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.woff$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file-loader" },
      { test: /\.eot$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "file-loader" }
    ]
  }
};