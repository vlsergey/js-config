/* eslint-disable-next-line */
module.exports = {
  extends: [
    './src/eslint.js',
  ],
  parserOptions: {
    project: [ './tsconfig.json', './src/tsconfig.json', './test/tsconfig.json' ],
  }
};
