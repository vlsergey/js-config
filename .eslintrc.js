/* eslint-env node */
/* eslint import/no-unused-modules: 0 */
/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint @typescript-eslint/no-unsafe-call: 0 */
const imported = require( './src/eslint.js' );
module.exports = {
  ...imported,
  // extends: imported.extends.filter( i => i != 'plugin:@typescript-eslint/recommended-requiring-type-checking' ),
  parserOptions: {
    ...imported,
    project: './tsconfig.json',
  }
};
