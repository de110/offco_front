module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": "off",
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    // "prettier/prettier": ['error', {
    //   singleQuote: true,
    //   semi: true,
    //   useTabs: false,
    //   tabWidth: 2,
    //   trailingComma: 'all',
    //   printWidth: 80,
    //   bracketSpacing: true,
    //   arrowParens: 'avoid',
    // }]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [

  ]
};
