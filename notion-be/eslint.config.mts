// eslint.config.js
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // ✅ Prettier formatting
      "prettier/prettier": "error",

      // ✅ Best practices for Node.js & Express
      "no-console": "warn", // vẫn cho phép console.log nhưng cảnh báo
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "warn",
      "no-unused-vars": "off", // dùng bản TS bên dưới
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/require-await": "error",

      // ✅ Security / Stability
      eqeqeq: ["error", "always"],
      "no-throw-literal": "error",
      "no-prototype-builtins": "warn",
      "callback-return": "off", // không cần trong async/await style

      // ✅ Express-friendly
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": ["warn"],

      // ✅ Style
      "spaced-comment": ["warn", "always", { markers: ["/"] }],
      "arrow-body-style": ["warn", "as-needed"],
    },
  },
  {
    // ✅ Disable rules that conflict with Prettier
    rules: {
      ...prettierConfig.rules,
    },
  },
]);
