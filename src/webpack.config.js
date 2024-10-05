const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// module.exports = {
//   entry: "./src/index.js", // Correct path for entry point
//   watch: true,
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "js/[name].[contenthash].bundle.js", // Include content hash for cache busting
//   },
//   module: {
//     rules: [
//       {
//         test: /\.s?css$/,
//         use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: "html-loader",
//             options: { minimize: true },
//           },
//         ],
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env"],
//           },
//         },
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./index.html", // Correct path to index.html
//       filename: "index.html",
//       chunks: ["main"], // Include main JavaScript bundle
//     }),
//     // new HtmlWebpackPlugin({
//     //   template: "projects/toolio.html",
//     //   filename: "toolio.html",
//     // }),
//     new MiniCssExtractPlugin({
//       filename: "css/[name].[contenthash].bundle.css", // Include content hash for cache busting
//     }),
//     new CopyWebpackPlugin({
//       patterns: [
//         { from: "docs/resume.pdf", to: "docs/resume.pdf" }, // Copy resume.pdf to dist/docs
//       ],
//     }),
//   ],
//   optimization: {
//     minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()],
//     runtimeChunk: false, // Avoid extra runtime chunk file
//     splitChunks: {
//       cacheGroups: {
//         default: false, // Disable Webpack from creating additional chunks
//       },
//     },
//   },
// };

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
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
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Cody Sheridan | Toolio",
      filename: "projects/toolio.html",
      template: "src/projects/toolio.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "src/docs"), to: "docs" },
        { from: path.resolve(__dirname, "src/img"), to: "img" },
      ],
    }),
  ],
};
