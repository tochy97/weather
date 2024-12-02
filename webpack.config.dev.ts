import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
          test: /\.(tsx)?$/,
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
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  path.join(__dirname, "public", "index.html"),
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 8000,
  },
};