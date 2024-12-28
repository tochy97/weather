import HtmlWebpackPlugin from 'html-webpack-plugin'
import path, { dirname } from 'path';

export default {
  entry: {
    index: './src/test/view.tsx',
  },
  mode: "development",
  output: {
    filename: '[name].mjs',
    path: path.resolve(__dirname, 'lib'),
    clean: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx$|\.ts/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(css)?$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  './src/test/view.html',
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'lib'),
    },
    port: 8000,
  },
};