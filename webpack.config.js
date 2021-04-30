const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  }

  return config
}

module.exports = {
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: isProd ? '/dist/' : '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    open: true,
    hot: isDev,
    historyApiFallback: true,
  },
  devtool: isProd ? false : 'eval-cheap-module-source-map',
  target: isProd ? 'browserslist' : 'web',
  module: {
    rules: [
      {
        test: /\.?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png|\.ico|\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'assets/images'
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: ['file-loader'],
      },
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[sha1:hash:hex:7]'
              },
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /^((?!\.module).)*scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/assets/images'),
    //       to: path.resolve(__dirname, 'build', 'assets/images'),
    //     },
    //   ],
    // }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
  ]
}