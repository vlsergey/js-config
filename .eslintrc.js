/* eslint-disable */
const imported = require( './src/eslint.js' );
module.exports = {
  ...imported,
  // extends: imported.extends.filter( i => i != 'plugin:@typescript-eslint/recommended-requiring-type-checking' ),
  parserOptions: {
    ...imported,
    project: ['./tsconfig.json','./src/tsconfig.json','./test/tsconfig.json'],
  }
};
