import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "no-unused-vars": "warn",
      eqeqeq: ["error", "always"],
      "no-console": "off"
    }
  },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly",
      },
    },
  },
]);
