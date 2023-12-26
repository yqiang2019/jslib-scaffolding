module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 'error',
    },
}
