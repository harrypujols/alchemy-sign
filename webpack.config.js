const path = require('path');

module.exports = {
  mode: "none",
  entry: "./dev/js/index.js",
  output: {
    path: path.resolve(__dirname, './docs/js'),
    filename: 'scripts.js',
  }
}
