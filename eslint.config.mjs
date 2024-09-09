import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle, { rules } from "eslint-config-dicodingacademy";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: globals.node,
    },
    rules: {
      "linebreak-style": ["error", "windows"],
    },
  },
  pluginJs.configs.recommended,
  daStyle, // other config style
];
