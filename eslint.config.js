import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      // Optional rules you can tweak
      'react/react-in-jsx-scope': 'off', // because you're using the new JSX transform
    },
  },
  // TypeScript
  ...tseslint.configs.recommended,
  pluginReact.configs.recommended,
]);
