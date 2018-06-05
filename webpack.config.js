const path = require("path");

module.exports = {
  entry: "./javascript.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  {
    module: {
        rules: [{
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            /* your options here */
                        }
                    }
                ]
            }]
    }
}
};
