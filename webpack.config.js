const path = require("path");

module.exports = {
  mode: "development",
  // エントリポイントの定義
  entry: {
    app: [path.join(__dirname, "src/index.js")],
  },
  // 出力先の定義
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].min.js",
  },
  resolve: {
    // モジュール解決定義
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react", "@babel/preset-env"],
              plugins: [
                ["@babel/plugin-proposal-class-properties", { loose: true }],
              ],
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: [path.join(__dirname, "src/assets")],
        loader: "file-loader?name=public/[name].[ext]",
      },
      {
        test: /\.(jpg|png)$/,
        loaders: "url-loader",
      },
    ],
  },
};
