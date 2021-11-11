const path = require("path");

module.exports = (env) => {
  console.log(env.goal);
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "webpack-numbers.js",
      library: {
        name: "webpackNumbers",
        type: "umd",
      },
      clean: true,
    },
  };
};
