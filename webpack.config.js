module.exports = {
    entry: './src/text.js',
    output: {
        path: __dirname+'/lib',
        filename: '[name].js',
    },
    /*module: {
        rules: [{
            test: /\.js$/,
            exclude: [/(node_modules)/,"fs"],
            loader: 'babel-loader',
            options:{
                plugins: ["transform-es2015-modules-commonjs"]
            },
        }]
    },*/
    target:'node'

}
