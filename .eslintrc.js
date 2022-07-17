const { defineConfig } = require('eslint-define-config');
const configComments = require('./configurations/comments');
const configEslint = require('./configurations/eslint');
const configImport = require('./configurations/import');
const configModule = require('./configurations/module');
const configNode = require('./configurations/node');
const configPromise = require('./configurations/promise');
const configTypescript = require('./configurations/typescript');
const configUnicorn = require('./configurations/unicorn');

module.exports = defineConfig({
  env: {
    browser: true,
    node: true,
    es2022: true,
    jquery: true,
  },
  plugins: ['n', 'import', 'unicorn', 'eslint-comments', 'sonarjs', 'compat', 'promise', 'regexp', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:n/recommended-script',
    'plugin:import/recommended',
    'plugin:import/electron',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:sonarjs/recommended',
    'plugin:compat/recommended',
    'plugin:promise/recommended',
    'plugin:regexp/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        // FIX VITE
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    ...configEslint,
    ...configNode,
    ...configImport,
    ...configPromise,
    ...configUnicorn,
    ...configComments,
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: 'tsconfig.json',
        // tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:n/recommended-module',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        ...configNode,
        ...configModule,
        ...configTypescript,
      },
    },
  ],
});
