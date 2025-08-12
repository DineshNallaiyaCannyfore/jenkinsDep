// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const no_console  = require("./esLintRules/no-console-log");
const no_alert  = require("./esLintRules/no-alert");
const customRules ={
  ...no_console,
  ...no_alert
}
module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
     plugins: {
      custom: {
        rules: customRules 
      }
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    ignores: [
      'dist/**',
      '*.spec.ts',
      'node_modules/**'
    ],
    rules: {

      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      "custom/no-alert": "error"
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
