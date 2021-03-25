/* eslint-env node */
/* eslint import/no-unused-modules: 0 */
/* eslint @typescript-eslint/no-unsafe-call: 0 */
/* eslint @typescript-eslint/no-unsafe-member-access: 0 */

module.exports = function( api ) {
  api.cache( true );

  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      [ '@babel/plugin-proposal-decorators', { legacy: true } ],
      [ '@babel/plugin-proposal-class-properties', { loose: true } ],
      '@babel/plugin-proposal-object-rest-spread',
    ],
  };
};
