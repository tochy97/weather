import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: {
    main: './src/index.tsx',
    Weather: './src/Weather.tsx'
  },
  output: {
    filename: '[name].tsx',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'source-map',
  module: {
    rules: [
        {
          test: /\.tsx?$/,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      inject: false
    })
  ],
};