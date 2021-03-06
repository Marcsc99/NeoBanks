module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:fp/recommended',
        'plugin:ramda/recommended',
        'airbnb',
        'airbnb/hooks'
    ],
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
    plugins: ['react', 'fp', 'react-hooks', 'ramda'],
    rules: {
        'import/prefer-default-export': 'off',
        'implicit-arrow-linebreak': 'off',
        // 'object-curly-spacing': ['warn', 'always'],
        'no-underscore-dangle': ['error', {
            allow: ['__', '_id']
        }],
        // React config
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx']
        }],
        'react/display-name': 'off',
        'react/no-unused-prop-types': 'warn',
        'react/sort-prop-types': 'off',
        'react/forbid-prop-types': [
            'error',
            {
                forbid: ['any', 'array'],
                checkContextTypes: false,
                checkChildContextTypes: false,
            },
        ],
        'react/prop-types': 'off',
        'react/no-array-index-key': 'off',
        // React hooks config
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        // FP Plugin config config
        'fp/no-class': 'warn',
        'fp/no-loops': 'error',
        'fp/no-mutating-methods': [
            'warn',
            {
                allowedObjects: ['_', 'R', 'fp', 'Actions'],
            },
        ],
        'fp/no-nil': 'off',
        'fp/no-rest-parameters': 'off',
        'fp/no-unused-expression': 'off',
        'fp/no-mutation': 'off',
        'fp/no-let': 'off',
        indent: 'off',
        semi: 'off',
        quotes: 'off',
        'jsx-quotes': 'off',
        'comma-dangle': 'off',
        'arrow-parens': 'off',
        'react/jsx-indent': 'off',
        'object-curly-newline': 'off',
        'linebreak-style': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'no-const-assign': 'warn',
        'no-duplicate-imports': 'error',
        'no-fallthrough': 'off',
        'no-unreachable': 'warn',
        'arrow-body-style': 'off',
        'default-case': 'error',
        'brace-style': 'off',
        curly: 'off',
        'padded-blocks': 'off',
        'no-var': 'warn',
        'vars-on-top': 'off',
        'no-lonely-if': 'warn',
        'nonblock-statement-body-position': 'off',
        'no-empty': 'warn',
        'no-unused-vars': 'warn',
        'no-multiple-empty-lines': 'off',
        'no-debugger': 'warn',
        'no-console': 'warn',
        'spaced-comment': 'off',
        'array-bracket-spacing': 'off',
        'max-len': 'off',
        'space-infix-ops': 'off',
        'prefer-template': 'off',
        'eol-last': 'off',
        'object-curly-spacing': 'off',
        'default-param-last': 'off',
        'react/function-component-definition': [
            'error',
            { namedComponents: 'arrow-function' }
        ],
        'react/jsx-indent-props': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-max-props-per-line': 'off',
        'prefer-destructuring': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'consistent-return': 'off',
        'no-confusing-arrow': 'off',
        'no-param-reassign': 'off',
    },
};
