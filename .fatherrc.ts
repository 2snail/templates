export default {
  // entry: ['src/index.ts', 'src/cli.ts'],
  target: 'node',
  disableTypeCheck: true,
  cjs: {
    type: 'babel',
    lazy: true,
  },
  extraBabelPlugins: ['@babel/plugin-proposal-optional-chaining'],
  // esm: 'rollup',
};
