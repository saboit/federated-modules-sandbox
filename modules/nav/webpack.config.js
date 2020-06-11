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
    publicPath: 'http://localhost:3002/',
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
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'nav',
      library: { type: 'var', name: 'nav' },
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        Nav: './src/Nav',
      },
      shared: [
        'react',
        'react-dom',
        'react-router-dom',
        'babel-loader',
        '@babel/core',
        '@babel/preset-react',
        'vue-template-compiler',
        'svelte',
        'svelte-loader',
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
  ],
};
