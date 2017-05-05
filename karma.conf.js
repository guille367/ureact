var webpackConf = require('./webpack.config.js');

module.exports = function(conf){
    conf.set({
        browsers: ['chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.jsx'],
        preprocesors: {
            'app/tests/**/*.jsx': ['webpack','sourcemap']
        },
        reporters: ['mocha'],       
        client:{
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConf,
        webpackServer: {
            noInfo: true,
        }
    });
}