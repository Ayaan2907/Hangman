module.exports = {
  mode: "development",
  entry: "./App.js",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js/, //it will cehck whether the file name is ending with .js or not
        loader: "babel-loader", // if its ending use babel loader
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
};
