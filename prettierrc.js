module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: false,
  trailingComma: "none",
  semi: false,
  useTabs: true,
  jsxSingleQuote: true,
  arrowParens: "avoid",
  singleAttributePerLine: true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindAttributes: ['className'],
};
