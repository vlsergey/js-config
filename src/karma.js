/* eslint-disable */
const path = require( 'path' );

module.exports = function( config ) {
  config.set( {
    browsers: [ 'jsdom' ],
    frameworks: [ 'mocha', 'webpack' ],

    plugins: [ 'karma-*' ],

    reporters: [ 'mocha' ],

    mochaReporter: {
      output: 'autowatch',
    },

    preprocessors: {
      'src/**/*.ts': [ 'webpack', 'sourcemap' ],
      'src/**/*.tsx': [ 'webpack', 'sourcemap' ],
      'src/**/*.js': [ 'webpack', 'sourcemap' ],
      'src/**/*.jsx': [ 'webpack', 'sourcemap' ],
      'test/**/*.ts': [ 'webpack', 'sourcemap' ],
      'test/**/*.tsx': [ 'webpack', 'sourcemap' ],
      'test/**/*.js': [ 'webpack', 'sourcemap' ],
      'test/**/*.jsx': [ 'webpack', 'sourcemap' ],
    },

    webpack: {
      mode: 'development',
      devtool: "inline-source-map",

      module: {
        rules: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            include: /(src|test)/,
            exclude: /node_modules/,
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                declaration: true,
                declarationMap: true,
                target: 'es6',
              },
            }
          },
        ],
      },

      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      },
    },
  } );
};
