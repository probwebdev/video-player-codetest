const plugins = [
  'postcss-import',
  'postcss-nesting',
  [
    'postcss-preset-env',
    {
      stage: 2,
      features: {
        'nesting-rules': false,
        'prefers-color-scheme-query': true,
      },
    },
  ],
];

module.exports = {
  plugins,
};
