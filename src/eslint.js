/* eslint-env node */
/* eslint import/no-unused-modules: 0 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    // sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      // impliedStrict: true,
      // modules: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
  ],
  globals: {
    require: true,
  },
  plugins: [ '@typescript-eslint', 'promise' ],

  rules: {
    /* Require braces in arrow function body */
    'arrow-body-style': [ 1, 'as-needed' ],
    'array-bracket-spacing': [ 1, 'always' ],
    /* enforce line breaks after opening and before closing array brackets */
    'array-bracket-newline': [ 1, 'consistent' ],
    /* enforce line breaks between array elements */
    'array-element-newline': [ 1, 'consistent' ],
    /* Require parens in arrow function arguments */
    'arrow-parens': [ 1, 'as-needed' ],
    /* Require space before/after arrow function’s arrow */
    'arrow-spacing': 1,

    /* Disallow or enforce spaces inside of blocks after opening block and before closing block */
    'block-spacing': [ 1, 'always' ],

    /* require or disallow trailing commas */
    'comma-dangle': [ 1, {
      arrays: 'only-multiline',
      objects: 'only-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'never'
    } ],

    /* enforce consistent spacing before and after commas */
    'comma-spacing': 1,
    /* enforce consistent spacing inside computed property brackets */
    'computed-property-spacing': [ 1, 'always' ],

    /* Require Dot Notation */
    'dot-notation': 1,

    /* require or disallow newline at the end of files */
    'eol-last': 1,

    /* require or disallow spacing between function identifiers and their invocations */
    'func-call-spacing': [ 1, 'never' ],

    'indent': [ 1, 2, { FunctionDeclaration: { body: 1, parameters: 2 }, ignoreComments: false } ],

    /* enforce consistent spacing between keys and values in object literal properties */
    'key-spacing': 1,
    /* enforce consistent spacing before and after keywords */
    'keyword-spacing': 1,

    /* require or disallow an empty line between class members */
    'lines-between-class-members': [ 1, 'always', { exceptAfterSingleLine: true } ],

    /* Require parentheses when invoking a constructor with no arguments */
    'new-parens': 1,
    /* require a newline after each call in a method chain */
    'newline-per-chained-call': 0,
    /* disallow the use of console */
    'no-console': 0,
    /* Disallow returning value in constructor */
    'no-constructor-return': 2,
    /* Disallow Regular Expressions That Look Like Division */
    'no-div-regex': 1,
    /* disallow duplicate class members */
    'no-dupe-class-members': 1,
    /* Disallow duplicate conditions in if-else-if chains */
    'no-dupe-else-if': 2,
    /* Disallow duplicate imports */
    'no-duplicate-imports': 1,
    /* Disallow Floating Decimals */
    'no-floating-decimal': 1,
    /* Disallow return before else */
    'no-else-return': 1,
    /* Disallow unnecessary function binding */
    'no-extra-bind': 1,
    /* Disallow Unnecessary Labels */
    'no-extra-label': 1,
    /* disallow unnecessary parentheses */
    // conflicts with flow implicit casts
    'no-extra-parens': 0,
    /* disallow assigning to imported bindings */
    'no-import-assign': 2,
    /* disallow this keywords outside of classes or class-like objects */
    'no-invalid-this': 2,
    /* disallow if statements as the only statement in else blocks */
    'no-lonely-if': 1,
    /* disallow multiple spaces */
    'no-multi-spaces': 1,
    /* disallow multiple empty lines */
    'no-multiple-empty-lines': 1,
    /* disallow negating the left operand of relational operators */
    'no-unsafe-negation': 1,
    /* disallow multiple spaces in regular expression literals */
    'no-regex-spaces': 1,
    /* disallow trailing whitespace at the end of lines */
    'no-trailing-spaces': 1,
    /* disallow ternary operators when simpler alternatives exist */
    'no-unneeded-ternary': 1,
    /* Disallow unnecessary computed property keys on objects */
    'no-useless-computed-key': 1,
    /* Disallow renaming import, export, and destructured assignments to the same name */
    'no-useless-rename': 1,
    /* Disallow redundant return statements */
    'no-useless-return': 1,
    /* require let or const instead of var */
    'no-var': 1,
    /* disallow whitespace before properties */
    'no-whitespace-before-property': 1,

    'object-curly-spacing': [ 1, 'always' ],
    /* require or disallow method and property shorthand syntax for object literals */
    'object-shorthand': 1,
    /* require or disallow assignment operator shorthand where possible */
    'operator-assignment': [ 1, 'always' ],

    /* Require using arrow functions for callbacks */
    'prefer-arrow-callback': 1,
    /* require const declarations for variables that are never reassigned after declared */
    'prefer-const': 1,
    /* Prefer use of an object spread over Object.assign */
    'prefer-object-spread': 1,
    /* require destructuring from arrays and/or objects */
    'prefer-destructuring': 0,
    /* disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals */
    'prefer-numeric-literals': 1,
    /* Suggest using the spread operator instead of .apply() */
    'prefer-spread': 1,

    /* require quotes around object literal property names */
    'quote-props': [ 1, 'consistent-as-needed' ],
    'quotes': [ 1, 'single' ],

    /* Enforce spacing between rest and spread operators and their expressions */
    'rest-spread-spacing': 1,

    'semi': [ 1, 'always' ],
    'semi-spacing': 1,
    /* enforce sorted import declarations within modules */
    'sort-imports': [ 1, { ignoreCase: true } ],
    'space-before-function-paren': [ 1, 'never' ],
    'space-before-blocks': [ 1, 'always' ],
    'space-in-parens': [ 1, 'always' ],
    'space-infix-ops': [ 1, { int32Hint: false } ],
    /* enforce consistent spacing after the // or /* in a comment */
    'spaced-comment': 1,
    'strict': [ 1, 'never' ],

    'unicode-bom': [ 1, 'never' ],

    /* Require IIFEs to be Wrapped */
    'wrap-iife': [ 1, 'inside' ],

    /* Require or disallow Yoda Conditions */
    'yoda': [ 1, 'never' ],

    /* Forbid a module from importing itself */
    'import/no-self-import': 2,
    /* Reports:
      modules without any exports
      individual exports not being statically imported or requireed from other modules in the same project */
    'import/no-unused-modules': [ 1, {
      missingExports: true,
      unusedExports: true,
      src: [ './src/' ],
      ignoreExports: [
        // Uncomment those on per-project level
        // '.*.js',
        // '*.conf.*',
        // '*.config.*',
        'src/index.js',
        // common name for flow types
        // '**/*Type.js',
      ],
    } ],
    /* Prevent unnecessary path segments in import and require statements. */
    'import/no-useless-path-segments': 1,

    /* Enforce all defaultProps have a corresponding non-required PropType */
    /* Does not work well with flow */
    'react/default-props-match-prop-types': 0,
    /* Validate closing bracket location in JSX */
    /* Better to place after props due to Atom/react plugin problem */
    'react/jsx-closing-bracket-location': [ 1, 'after-props' ],
    /* <...> disallow spaces inside of curly braces in JSX attributes and expressions.*/
    'react/jsx-curly-spacing': [ 1, { when: 'never' } ],
    /* Enforce boolean attributes notation in JSX */
    'react/jsx-boolean-value': 1,
    /* Enforce or disallow spaces inside of curly braces in JSX attributes and expressions. */
    'react/jsx-child-element-spacing': 1,
    /* Enforce or disallow spaces around equal signs in JSX attributes */
    'react/jsx-equals-spacing': [ 1, 'never' ],
    /* No .bind() or Arrow Functions in JSX Props (react/jsx-no-bind) */
    'react/jsx-no-bind': 1,
    /* Prevent duplicate properties in JSX */
    'react/jsx-no-duplicate-props': 1,
    /* Disallow undeclared variables in JSX */
    'react/jsx-no-undef': 1,
    /* Disallow multiple spaces between inline JSX props */
    'react/jsx-props-no-multi-spaces': 1,
    'react/jsx-sort-props': 1,
    /* Validate whitespace in and around the JSX opening and closing brackets */
    'react/jsx-tag-spacing': [ 1, { beforeClosing: 'never' } ],
    /* Prevent using this.state within a this.setState */
    'react/no-access-state-in-setstate': 1,
    /* Prevent problem with children and props.dangerouslySetInnerHTML */
    'react/no-danger-with-children': 1,
    /* Prevent using string references */
    'react/no-string-refs': 1,
    /* Prevent this from being used in stateless functional components */
    'react/no-this-in-sfc': 2,
    /* Prevents common typos */
    'react/no-typos': 2,
    /* Prevent invalid characters from appearing in markup */
    'react/no-unescaped-entities': 2,
    /* Prevent usage of unknown DOM property */
    'react/no-unknown-property': 1,
    /* Prevent usage of UNSAFE_ methods */
    'react/no-unsafe': 1,
    /* Prevent definitions of unused prop types */
    'react/no-unused-prop-types': 1,
    /* Prevent definitions of unused state */
    'react/no-unused-state': 1,
    /* Prevent usage of setState in componentWillUpdate */
    'react/no-will-update-set-state': 2,
    /* Enforce React components to have a shouldComponentUpdate method */
    'react/require-optimization': 1,
    /* Enforce ES5 or ES6 class for returning value in render function */
    'react/require-render-return': 2,
    /* Prevent extra closing tags for components without children */
    'react/self-closing-comp': 1,
    /* Enforce style prop value being an object */
    'react/style-prop-object': 2,
    /* Prevent void DOM elements (e.g. <img />, <br />) from receiving children */
    'react/void-dom-elements-no-children': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
        moduleDirectory: [ 'node_modules', 'src' ],
      },
    },
    'react': {
      version: 'detect',
    },
  },
};
