module.exports = {
    "plugins": ["import"],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "react",
        "react-native"
    ],
    "settings": {
        "react": {
            "pragma": "React",
            "version": "detect"
        },
      "import/resolver": {
        "node": {
          "extensions": [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".d.ts",
            ".android.js",
            ".android.jsx",
            ".android.ts",
            ".android.tsx",
            ".ios.js",
            ".ios.jsx",
            ".ios.ts",
            ".ios.tsx",
            ".web.js",
            ".web.jsx",
            ".web.ts",
            ".web.tsx"
          ]
        }
      }
    },
    "extends": [
      "plugin:@typescript-eslint/recommended",
      "@react-native-community",
    ],
    "rules": {
        "comma-dangle": 0,
        "no-unused-vars": 0,
        "no-undef": 0,
        "quotes": 0,
        "dot-notation": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "react/no-unescaped-entities": 0,
        "react/prop-types": "off",
        "react-native/no-raw-text": 0,
        "space-before-function-paren": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/indent": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-object-literal-type-assertion": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-var-requires": 0,
        "no-constant-condition": "off",
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "no-sparse-arrays": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/camelcase": 0,
      }
  };