module.exports = {
   env: {
      browser: true,
      es6: true,
      jest: true,
   },
   extends: ['airbnb', 'prettier'],
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
   },
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
   },
   plugins: ['react', 'prettier'],
   parser: 'babel-eslint',
   rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      "react/jsx-max-props-per-line": [1, { "maximum": { "single": 3, "multi": 1 } }],
      'react/prop-types': 0,
      'react/jsx-sort-props': [1, { ignoreCase: true }],
      'no-underscore-dangle': 0,
      'import/imports-first': ['error', 'absolute-first'],
      'import/newline-after-import': 'error',
      'no-console': 0,
      'class-methods-use-this': 0,
      indent: ['error', 3],
   },
};
