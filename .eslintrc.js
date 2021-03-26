/* eslint-disable */
const imported = require( './src/eslint.js' );
module.exports = {
  ...imported,
  parserOptions: {
    ...imported,
    project: ['./tsconfig.json','./src/tsconfig.json','./test/tsconfig.json'],
  }
};
