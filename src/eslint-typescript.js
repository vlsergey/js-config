/* eslint-disable-next-line */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  plugins: ['@typescript-eslint'],

  rules: {

    /* Standard-extension rules */
    'no-extra-parens': 'off',
    'no-invalid-this': 'off',
    'no-unused-vars': 'off',
    'object-curly-spacing': 'off',
    'quotes': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',

    /* Require or disallow trailing comma */
    '@typescript-eslint/comma-dangle': [1, {
      arrays: 'only-multiline',
      objects: 'only-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'never'
    }],
    /* Disallow unnecessary parentheses */
    '@typescript-eslint/no-extra-parens': 1,
    /* Disallow unused variables */
    '@typescript-eslint/no-unused-vars': 2,
    /* Enforce consistent spacing inside braces */
    '@typescript-eslint/object-curly-spacing': 1,
    /* Enforce the consistent use of either backticks, double, or single quotes */
    '@typescript-eslint/quotes': [1, 'single', {allowTemplateLiterals: true}],
    /* Require or disallow semicolons instead of ASI */
    '@typescript-eslint/semi': 1,
    /* Enforces consistent spacing before function parenthesis */
    '@typescript-eslint/space-before-function-paren': 1,
    /* This rule is aimed at ensuring there are spaces around infix operators */
    '@typescript-eslint/space-infix-ops': 1,

    /* TypeScript-specific rules */

    /* Requires using either T[] or Array<T> for arrays */
    '@typescript-eslint/array-type': [1, {default: 'array', readonly: 'array'}],

    /* Enforce or disallow the use of the record type */
    '@typescript-eslint/consistent-indexed-object-style': 1,

    /* Consistent with type definition either interface or type */
    '@typescript-eslint/consistent-type-definitions': 1,

    /* Enforces consistent usage of type imports */
    '@typescript-eslint/consistent-type-imports': [1, {prefer: 'no-type-imports'}],

    /* Require a specific member delimiter style for interfaces and type literals */
    '@typescript-eslint/member-delimiter-style': [1, {
      multiline: {delimiter: 'semi', requireLast: true},
      singleline: {delimiter: 'semi', requireLast: false},
    }],

    /* Enforces using a particular method signature syntax */
    '@typescript-eslint/method-signature-style': 1,

    /* Disallow non-null assertion in locations that may be confusing */
    '@typescript-eslint/no-confusing-non-null-assertion': 1,

    /* Requires expressions of type void to appear in statement position */
    '@typescript-eslint/no-confusing-void-expression': 1,

    /* Flags unnecessary equality comparisons against boolean literals */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 1,

    /* Disallows unnecessary constraints on generic types */
    '@typescript-eslint/no-unnecessary-type-constraint': 1,

    /* Prefer usage of as const over literal type */
    '@typescript-eslint/prefer-as-const': 1,

    /* Enforce includes method over indexOf method */
    '@typescript-eslint/prefer-includes': 1,

    /* Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules */
    '@typescript-eslint/prefer-namespace-keyword': 1,

    /* Requires that private members are marked as readonly if they're never modified outside of the constructor */
    '@typescript-eslint/prefer-readonly': 1,

    /* Prefer using type parameter when calling Array#reduce instead of casting */
    '@typescript-eslint/prefer-reduce-type-parameter': 1,

    /* Enforce that RegExp#exec is used instead of String#match if no global flag is provided */
    '@typescript-eslint/prefer-regexp-exec': 1,

    /* Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings */
    '@typescript-eslint/prefer-string-starts-ends-with': 1,

    /* Recommends using @ts-expect-error over @ts-ignore */
    '@typescript-eslint/prefer-ts-expect-error': 1,

    /* Require consistent spacing around type annotations */
    '@typescript-eslint/type-annotation-spacing': 1,

    /* Enforces unbound methods are called with their expected scope */
    '@typescript-eslint/unbound-method': 2,

    /* Disallow this keywords outside of classes or class-like objects */
    '@typescript-eslint/no-invalid-this': 2,

  },
};
