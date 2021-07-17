/* eslint no-undef: 0 */
/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require('path');

const imported = require('./src/karma.js');
/* eslint-disable-next-line */
module.exports = config => {
  imported(config);

  /* eslint-disable-next-line */
  config.set({
    files: [
      'test/**/*Test.tsx',
    ],

    webpack: {
      output: {
        path: path.resolve(__dirname, '../lib/'),
      },
    }
  });
};
