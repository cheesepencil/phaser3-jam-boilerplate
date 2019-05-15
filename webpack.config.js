const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    overlay: true,
    open: true
  },
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]'
            }
          }
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'styles',
              name: '[name].[ext]'
            }
          }
        ],
      },
      {
        test: /\.(wav)$/,
        use:[
          {
            loader: 'file-loader',
            options: {
              outputPath: 'audio',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};