const rules = require("./webpack.rules");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

let assets = ['assets']
module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: assets.map((asset) => ({
        from: path.resolve(__dirname, "src", asset),
        to: path.resolve(__dirname, ".webpack/renderer", asset),
      })),
    }),
  ],
};
