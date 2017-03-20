var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
console.log(__dirname)

var cat = require('cat');
 
cat('.glitch-assets', console.log);

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: 'assets/',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
        // check babelrc
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  /*plugins: [
    new CopyWebpackPlugin([
      { from: 'assets', to: 'dist/assets' }
    ])
  ]*/
  devtool: "#inline-source-map"
};
