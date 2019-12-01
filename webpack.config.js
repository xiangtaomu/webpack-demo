const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//clean-webpack-plugin 3.0.0版本后需要解构获取

module.exports = {
  mode: 'development',  //production
  //打包生成的代码和源代码的映射，方便查错
  devtool: 'cheap-module-eval-source-map', //'cheap-module-source-map'
  entry: {
    main: './src/index.js'
  },
  output: {
    // publicPath: 'http://cdn.com.cn',
    publicPath: '/',
    filename: 'output.js',
    //后面需要绝对路径
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      //字体文件
      {
        test: /\.(svg|eot|ttf|woff)$/,
        use: {
          loader: 'file-loader'
        }
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            //placeholder占位符
            // name: '[name].[ext]',
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true   //模块划
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
        // use: [
        //   { loader: 'style-loader' },
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       importLoaders: 2,
        //     }
        //   },
        //   { loader: 'sass-loader' },
        //   {
        //     loader: 'postcss-loader',
        //     options: {
        //       plugins: [require('autoprefixer')],
        //       browser: ['last 10 versions']
        //     }
        //   }
        // ]
      }, {
        test: /.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }]
  },
  //在打包好的文件夹起一个服务,利用了package.json中的script命令中webpack-dev-server
  //devServer配置中的proxy还支持代理解决跨域
  devServer: {
    contentBase: './dist',
    open: true,
    port: 3000,
    proxy: {
      'api': 'http://openapi.st.ipo.com'
    }
  },
  plugins: [
    //htmlWebpackPlugin 会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
    //cleanWebpackPlugin 会在打包前删除dist文件
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }), new CleanWebpackPlugin()
  ]
}