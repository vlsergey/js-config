/* eslint-disable-next-line */
module.exports = {
  extends: [ 'plugin:react/recommended' ],

  rules: {
    /* Enforce all defaultProps have a corresponding non-required PropType */
    /* Does not work well with flow */
    'react/default-props-match-prop-types': 0,
    /* Validate closing bracket location in JSX */
    /* Better to place after props due to Atom/react plugin problem */
    'react/jsx-closing-bracket-location': [ 1, 'after-props' ],
    /* <...> disallow spaces inside of curly braces in JSX attributes and expressions.*/
    'react/jsx-curly-spacing': [ 1, {when: 'never'} ],
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
    'react/jsx-tag-spacing': [ 1, {beforeClosing: 'never'} ],
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
    react: {
      version: 'detect',
    },
  },
};
