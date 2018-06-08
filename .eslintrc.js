module.exports = {
  extends: 'airbnb',
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id', '__REDUX_DEVTOOLS_EXTENSION__'] }],
    'no-plusplus': 'off',
    camelcase: 'off',
    'no-mixed-operators': 'off',
    'react/jsx-filename-extension': 'off',
  },
  env: {
    browser: true,
    node: true
  }
  //   parserOptions: {
  //     'ecmaVersion': 2017
  //   }
};
