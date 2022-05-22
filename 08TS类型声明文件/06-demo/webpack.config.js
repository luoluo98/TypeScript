const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    // 哪些文件类型可省略后缀名称
    extensions: ['.js', '.ts', '.tsx']
  },

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    open: true,
    hot: true,
    port: 9000
  },

  module: {
    rules: [
      // 处理 .ts or .tsx 文件
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    })
  ]
}
