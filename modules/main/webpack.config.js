const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'http://localhost:3001/',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      vm: 'vm-browserify',
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'main',
      library: { type: 'var', name: 'main' },
      filename: 'remoteEntry.js',
      remotes: {
        nav: 'nav',
        vue: 'vue',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
