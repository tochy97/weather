import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: {
    index: './src/index.tsx',
    Weather: './src/Weather.tsx'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(css)?$/,
        use: ["style-loader","css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    filename: '[name].tsx',
    path: path.resolve(__dirname, 'lib'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: false
    })
  ],
  devtool: false,
};