// https://eslint.org/docs/latest/use/configure/configuration-files-new

import tslint from "@typescript-eslint/eslint-plugin";

export default [
  {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    files: ["./src/**/*.ts", "./src/**/*.tsx"],
    parser: "@typescript-eslint/parser",
    plugins: {
      "@typescript-eslint": tslint,
    },
    rules: {},
  },
];
