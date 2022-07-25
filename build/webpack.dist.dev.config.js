var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var webpackBaseConfig = require('./webpack.base.config.js');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'vue-split-panel.js',
    library: 'vue-split-panel',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    // @todo
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
});
