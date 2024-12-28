import path, { dirname } from 'path';

export default {
  entry: {
    Weather: './src/index.ts',
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ["ts-loader"],
        exclude: [/node_modules/, /test/],
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
  output: {
    filename: '[name].mjs',
    path: path.resolve(__dirname, 'lib'),
    chunkFormat: "module",
    library: {
      type: "module",
    },
    clean: true
  },
  experiments: {
      outputModule: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [],
  devtool: false,
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};