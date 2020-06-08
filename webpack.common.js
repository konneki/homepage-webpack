const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  /* here you can define another js file */
  entry: {
    index: './src/js/index.js',
    notespage: './src/js/notespage.js',
    homework: './src/js/homework.js',
    homepage: './src/js/homepage.js',
  },
  output: {
    filename: '[name].[hash:8].js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{from: 'public'}],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      inject: true,
      chunks: ['index', 'homepage'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/homework.html',
      inject: true,
      chunks: ['index', 'homework'],
      filename: 'homework.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/notespage.html',
      inject: true,
      chunks: ['index', 'notespage'],
      filename: 'notespage.html',
    }),
  ],
};
