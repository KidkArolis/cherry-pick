var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./index",
  otuput: {
    path: "dist"
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "react-route": __dirname + "/lib/react-route"
    },
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'})
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: "jsx" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.woff$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file-loader" },
      { test: /\.eot$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "file-loader" }
    ]
  }
};