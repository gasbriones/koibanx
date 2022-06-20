module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: ["babel.config.js"],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'func-names': "off",
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/use-unknown-in-catch-variables': 'off',
        'import/prefer-default-export': 'off',
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        'react/no-array-index-key': 'off',
        'max-len': 'off'
    }
};