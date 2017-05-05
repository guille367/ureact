var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx',
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js',
    },
  externals:{
    jquery: "jQuery"
  },
  plugins:[
    new webpack.ProvidePlugin({
        "$": "jquery",
        "jQuery": "jquery",
    })],
    resolve: {
        modules: [
            __dirname, 
            'node_modules',
        ],
        extensions: ['*','.js','.jsx'],
        alias:{
            Main: 'app/components/Main',
            ModalErr: 'app/components/ModalErr.jsx',
            Navigation: 'app/components/Navigation.jsx',
            applicationStyles: 'app/styles/app.scss',
        }
    },
    module:{
        loaders:[{
            loader: 'babel-loader',
            query:{
                presets: ['react','es2015']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
        }]
    },
};