const path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CleanWebpackPlugin = require('clean-webpack-plugin'),
ManifestPlugin = require('webpack-manifest-plugin'),
webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 9999,
    publicPath: '/'
  },
  entry: ['./frontend/core.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(mp4|jpg)$/,
        use: ['file-loader']
      },
    ]
  },
  plugins: [
  new HtmlWebpackPlugin({template: './frontend/static/index.html'}),
  new CleanWebpackPlugin(['dist']),
  new ManifestPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
  ]
};