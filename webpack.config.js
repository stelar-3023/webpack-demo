const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contentHash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into common js
          "sass-loader", // 1. Turns sass into css
        ],
      },
    ],
  },
};
