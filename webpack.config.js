// const path = require("path");

module.exports = {
  entry: "./src/renderer/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/src/renderer/"
  }
  // resolve: {
  //   alias: {
  //     Components: path.resolve(__dirname, "src/renderer/components/")
  //   }
  // }
};
