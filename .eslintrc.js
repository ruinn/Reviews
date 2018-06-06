module.exports = {
  extends: 'airbnb',
  rules: {
    'no-console': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-plusplus': 'off',
    'camelcase': 'off',
    'no-mixed-operators': 'off'
  }
  //   parserOptions: {
  //     'ecmaVersion': 2017
  //   }
};
