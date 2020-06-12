const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: "http://localhost:3004/",
  },

  resolve: {
    extensions: [".vue", ".js", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js", // 'vue/dist/vue.common.js' for webpack 1
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "vue",
      library: { type: "var", name: "vue" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        App: "./src/bootstrap",
      },
      shared: [
        "babel-loader",
        "@babel/core",
        "vue-template-compiler",
        "vue-loader",
      ],
    }),
  ],
};
