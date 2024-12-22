import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
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
      directory: path.join(__dirname, "build"),
    },
    port: 8000,
  },
};