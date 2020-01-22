const getWebpackConfig = require('@nrwl/react/plugins/webpack');

function getCustomWebpackConfig(webpackConfig) {
  const config = getWebpackConfig(webpackConfig);

  // SVG fix
  delete config.module.rules.find(rule => rule.test.test('.svg')).issuer;

  // // TS v3.7 support
  // const babelRuleOptions = config.module.rules.find(r => r.loader === 'babel-loader').options;
  // babelRuleOptions.plugins.push('@babel/plugin-proposal-optional-chaining');
  // babelRuleOptions.plugins.push('@babel/plugin-proposal-nullish-coalescing-operator');

  return config;
}

module.exports = getCustomWebpackConfig;
