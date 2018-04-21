const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'production',
  entry: './src/tsx/index.tsx',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve('./build'),
    publicPath: '/assets'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', 'json'],
  },
  module: {
    rules: [{
      test: /\.tsx$/,
      use: "ts-loader"
    }]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'build',
    port: 3000
  },
  performance: { 
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    })
  ]
}

module.exports = config