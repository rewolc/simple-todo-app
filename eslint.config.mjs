import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // Base JavaScript/TypeScript/React config
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: {
      js,
      prettier: pluginPrettier,
    },
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...pluginPrettier.configs.recommended.rules,
      'prettier/prettier': 'error',
    },
    // Add JS recommended config
    linterOptions: {
      configType: 'flat',
    },
  },

  // TypeScript config
  ...tseslint.configs.recommended,

  // React config (flat)
  pluginReact.configs.flat.recommended,

  // Prettier config override (disables conflicting rules)
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      ...prettierConfig.rules,
    },
  },
])
