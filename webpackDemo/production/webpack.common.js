const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/template.pug",
      filename: "index.html",
      minify: false,
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },
  experiments: {
    topLevelAwait: true,
  },
  module: {
    rules: [
      {
        test: /\.png/,
        type: "asset/resource",
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: false,
            },
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
};
