const Plugin = require('..').default;

module.exports = [
  {
    entry: { entry: './entry.js', entry2: './entry2.js' },
    mode: 'development',
    devtool: false,
    output: {
      libraryTarget: 'amd',
      globalObject: 'this',
      publicPath: 'http://localhost:8080/dist/',
    },
    plugins: [new Plugin()],
    externals: { 'lodash-es': 'lodash-es' },
  },
];
