const path = require('path');

module.exports = {
  entry: './src/frontend/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/frontend'),
    filename: 'main.js'
  },
  mode: "production",
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: { configFile : 'frontend.tsconfig.json'}
          }
        ],

      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
//  externals: {
//    "react": "React",
//    "react-dom": "ReactDOM"
//  }
};
