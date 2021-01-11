const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    mode: 'production',

    entry: './js/index.js',

    devtool: isDevelopment ? 'eval-cheap-module-source-map' : false,

    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    },
    output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, '../public/js'),
    },

    optimization: {
      minimize: !isDevelopment,
      minimizer: isDevelopment
        ? []
        : [
            new TerserPlugin({
              terserOptions: {
                compress: { drop_console: true },
              },
            }),
          ],
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /node_modules/,
            name: 'vendor',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      modules: false,
                      targets: {
                        browsers: ['> 1%', 'last 3 versions', 'ie 11'],
                      },
                      debug: true,
                      useBuiltIns: 'usage',
                      corejs: 3,
                    },
                  ],
                ],
              },
            },
          ],
        },
        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          exclude: /node_modules/,
          use: ['raw-loader', 'glslify-loader'],
          type: 'javascript/auto',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.glsl', '.vert', '.frag', '.vs', '.fs'],
    },
    target: ['web', 'es5'],
  };
};
