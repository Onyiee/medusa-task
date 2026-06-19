module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [
    // Required so constructor parameter decorators (@Inject) compose correctly
    // with the class-level @Controller() decorator under Babel's legacy decorators.
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'babel-plugin-parameter-decorator',
  ],
};
