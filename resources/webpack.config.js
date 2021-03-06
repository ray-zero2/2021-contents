const webpack = require('webpack');
const path = require('path');
// const ESLintPlugin = require('eslint-webpack-plugin');

const optimizationConfig = require('./webpack_settings/optimization.js');
const babelLoaderSettings = require('./webpack_settings/loaderSettings/babel-loader.js');
const tsLoaderSettings = require('./webpack_settings/loaderSettings/ts-loader.js');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    mode: 'production',
    entry: './js/index.js',
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, '../public/js'),
    },
    devtool: isDev ? 'eval-cheap-module-source-map' : false,
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    },
    optimization: optimizationConfig(isDev),
    module: {
      rules: [
        // JavaScript
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [babelLoaderSettings(isDev)],
        },

        // TypeScript
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [babelLoaderSettings(isDev), tsLoaderSettings(isDev)],
        },

        // vue
        {
          test: /\.vue$/,
          use: ['vue-loader'],
        },

        // glsl : glslify併用のため type: 'asset/source'ではなくloaderを使用
        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          use: ['raw-loader', 'glslify-loader'],
          type: 'javascript/auto', // raw-loader, url-loader, file-loaderを使用する場合は必要
        },

        // images
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: 'asset/inline', // url-loaderの代替
          // type: 'asset/resource', // file-loaderの代替
          // type: 'asset/source', // raw-loaderの代替
        },
      ],
    },

    resolve: {
      extensions: [
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.vue',
        '.glsl',
        '.vert',
        '.frag',
        '.vs',
        '.fs',
      ],
    },

    target: ['web', 'es5'], // IE対応の場合必須

    plugins: [
      // // eslint-loaderは非推奨
      // // TODO: eslint-webpack-pluginとprettierの併用を調査
      // new ESLintPlugin(),
    ],
  };
};
