/* eslint-disable */
const path = require( 'path' );

const imported = require( './src/karma.js' );
module.exports = config => {
  imported(config);

  config.set({
    files: [
      'test/**/*Test.tsx',
    ],

    webpack: {
      output: {
          path: path.resolve(__dirname, '../lib/'),
      },
    }
  })
};
