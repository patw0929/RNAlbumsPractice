module.exports = {
  'extends': 'eslint-config-airbnb',
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true,
  },
  'ecmaFeatures': {
    'jsx': true
  },
  'rules': {
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }],
    'react/jsx-no-bind': 'error',
    'react/no-multi-comp': 'off',
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'ForInStatement',
      'WithStatement'
    ],
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'comma-dangle': ['error', 'always-multiline'], // https://github.com/airbnb/javascript/commit/788208295469e19b806c06e01095dc8ba1b6cdc9
    'indent': ['error', 2, {'SwitchCase': 1}],
    'no-console': 0,
    'no-alert': 0,
    'no-underscore-dangle': 'off',
    'max-len': [ 'error', 150, 2, { 'ignoreUrls': true, 'ignoreComments': false, } ],
    'react/jsx-curly-spacing': [ 'error', 'always', { 'allowMultiline': true } ],
    'arrow-body-style': 'off',
    'no-mixed-operators': ['error', {
      'groups': [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      'allowSamePrecedence': true
    } ],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
    'react/no-string-refs': 'off', // FIXME
    'arrow-parens': ['error', 'always'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/prefer-stateless-function': 'off',
    'no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['spec/**', 'test/**', 'tests/**', '**/__tests__/**',
        'jest/**', '*.js'],
      optionalDependencies: false,
    }],
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      // CallExpression: {
        // parameters: null,
      // },
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      }
    }],
    'no-plusplus': ['error', { "allowForLoopAfterthoughts": true }]
  },
  'plugins': [
    'react',
    'import',
    'security'
  ],
  'globals': {
    '__DEV__': true,
    '__DEVELOPMENT__': true,
    '__CLIENT__': true,
    '__SERVER__': true,
    '__DISABLE_SSR__': true,
    '__DEVTOOLS__': true,
  }
};
