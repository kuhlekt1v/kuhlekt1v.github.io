const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Cody Sheridan",
      filename: "index.html",
      template: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Cody Sheridan | Toolio",
      filename: "projects/toolio.html",
      template: "projects/toolio.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "docs"), to: "docs" },
        { from: path.resolve(__dirname, "img"), to: "img" },
      ],
    }),
  ],
};
