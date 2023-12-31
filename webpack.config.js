const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  devtool: "source-map",
  devServer: {
    static: "./dist"
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  optimization: {
    runtimeChunk: "single"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [path.resolve(__dirname, "plugins/index.js")]
          }
        }
      }
    ]
  }
};
