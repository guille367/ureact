var webpackConf = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha','jasmine'],
    reporters: ['mocha'],
    mochaReporter: {
      colors: {
        success: 'green',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },
    files: [
      'app/tests/**/*.jsx',
      'app/tests/*.jsx',
    ],
    resolve: {
      extensions: [ '', '.js', '.jsx' ]
    },
    webpack: webpackConf,
    webpackServer: {
        noInfo: true,
    },
    preprocessors: {
      '**/*.js': ['sourcemap'],
      'app/tests/**/*.jsx': ['webpack','sourcemap']
    },
    
  });
};