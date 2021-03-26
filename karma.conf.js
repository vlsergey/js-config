/* eslint-disable */

const imported = require( './src/karma.js' );
module.exports = config => {
  imported(config);

  config.set({
    files: [
      'test/**/*Test.tsx',
    ],
  })
};
