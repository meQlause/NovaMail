import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config(
  // ── Ignored paths ──
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**', '*.config.*'],
  },

  // ── Base JS rules ──
  js.configs.recommended,

  // ── TypeScript rules ──
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // ── Main config ──
  {
    files: ['src/**/*.{ts,tsx}'],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.es2022 },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import': importPlugin,
    },

    settings: {
      react: { version: 'detect' },
    },

    rules: {
      // ── React ──
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/prop-types': 'off',
      'react/display-name': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

      // ── TypeScript ──
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports', fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',

      // ── Imports ──
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-duplicates': 'error',
      'import/no-cycle': 'warn',

      // ── General best practices ──
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'warn',
      'prefer-template': 'warn',
      'eqeqeq': ['error', 'always'],
      'no-nested-ternary': 'warn',
      'no-unneeded-ternary': 'warn',
      'spaced-comment': ['warn', 'always'],
      'curly': ['warn', 'all'],
    },
  },
)
