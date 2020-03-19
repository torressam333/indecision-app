const path = require('path');
//Entry point of our app
module.exports = {
  //config details for webpack build
    entry: './src/app.js',
    //Where to output bundle.js
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};
