const path = require('path');
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = {
  devtool: 'eval-source-map',
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],//定义资源的默认后缀
    alias: {//把资源路径重定向到另一个路径
      'assets': path.join(__dirname, '../src/assets')
    }
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'build/',
          outputPath: 'images/'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // extractLESS,
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html'
    }),
    new webpack.DefinePlugin({ //根据设置的不同环境变量决定是否打包压缩，还是启动dev server 或者是 prod server
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),//压缩代码
    new ExtractTextPlugin('[name].css')
  ]
};
module.exports = config;
