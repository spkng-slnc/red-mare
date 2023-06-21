// https://eslint.org/docs/latest/use/configure/configuration-files-new

import parser from "@typescript-eslint/parser";
import ts from "@typescript-eslint/eslint-plugin";
import js from "@eslint/js";
import sort from "eslint-plugin-simple-import-sort";

const typescriptEslintRecommended = ts.configs.recommended;
delete typescriptEslintRecommended.extends;

export default [
  {
    ...js.configs.recommended,
    ...typescriptEslintRecommended,
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
      ecmaVersion: "latest",
    },
    plugins: {
      "typescript-eslint": ts,
      "simple-import-sort": sort,
    },
    rules: {
      "no-console": ["warn"],
      "sort-keys": ["error"],
      "sort-vars": ["error"],
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Packages `react` related packages come first.
            ["^react", "^@?\\w"],
            // Internal packages.
            ["^(@|components)(/.*|$)"],
            // Side effect imports.
            ["^\\u0000"],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports. Put same-folder imports and `.` last.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports.
            ["^.+\\.?(css)$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
];
