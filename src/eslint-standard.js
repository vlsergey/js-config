/* eslint-disable-next-line */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  globals: {
    require: true,
  },
  plugins: ['promise'],

  rules: {
    /* Require braces in arrow function body */
    'arrow-body-style': [1, 'as-needed'],
    /* Disallow or enforce spaces inside of brackets */
    'array-bracket-spacing': [1],
    /* enforce line breaks after opening and before closing array brackets */
    'array-bracket-newline': [1, 'consistent'],
    /* enforce line breaks between array elements */
    'array-element-newline': [1, 'consistent'],
    /* Require parens in arrow function arguments */
    'arrow-parens': [1, 'as-needed'],
    /* Require space before/after arrow function’s arrow */
    'arrow-spacing': 1,

    /* Disallow or enforce spaces inside of blocks after opening block and before closing block */
    'block-spacing': [1],

    /* require or disallow trailing commas */
    // superseded by @typescript-eslint/comma-dangle
    'comma-dangle': 0,

    /* enforce consistent spacing before and after commas */
    'comma-spacing': 1,
    /* enforce consistent spacing inside computed property brackets */
    'computed-property-spacing': [1],

    /* Require Dot Notation */
    'dot-notation': 1,

    /* require or disallow newline at the end of files */
    'eol-last': 1,

    /* require or disallow spacing between function identifiers and their invocations */
    'func-call-spacing': [1],

    'indent': [1, 2, {FunctionDeclaration: {body: 1, parameters: 2}, ignoreComments: false}],

    /* enforce consistent spacing between keys and values in object literal properties */
    'key-spacing': 1,
    /* enforce consistent spacing before and after keywords */
    'keyword-spacing': 1,

    /* require or disallow an empty line between class members */
    'lines-between-class-members': [1, 'always', {exceptAfterSingleLine: true}],

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
    'no-extra-parens': 1,
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
    /* Disallow Unused Variables (no-unused-vars) */
    'no-unused-vars': 2,
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

    'object-curly-spacing': [1],
    /* require or disallow method and property shorthand syntax for object literals */
    'object-shorthand': 1,
    /* require or disallow assignment operator shorthand where possible */
    'operator-assignment': [1],

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
    'quote-props': [1, 'consistent-as-needed'],
    'quotes': [1, 'single', {allowTemplateLiterals: true}],

    /* Enforce spacing between rest and spread operators and their expressions */
    'rest-spread-spacing': 1,

    'semi': 1,
    'semi-spacing': 1,
    /* enforce sorted import declarations within modules */
    'sort-imports': [1, {ignoreCase: true}],
    'space-before-function-paren': [1],
    'space-before-blocks': 1,
    'space-in-parens': 1,
    'space-infix-ops': 1,
    /* enforce consistent spacing after the // or /* in a comment */
    'spaced-comment': 1,
    'strict': [1, 'never'],

    'unicode-bom': [1, 'never'],

    /* Require IIFEs to be Wrapped */
    'wrap-iife': [1, 'inside'],

    /* Require or disallow Yoda Conditions */
    'yoda': [1, 'never'],
  }
};
