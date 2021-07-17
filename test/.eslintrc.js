/* eslint no-undef: 0 */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    // for test:
    describe: true,
    it: true,
  },

  rules: {
    // due to renderIntoDocument() usage
    '@typescript-eslint/no-confusing-void-expression': 0,
  },
};
