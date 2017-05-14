module.exports = {
    entry: './src/text.js',
    output: {
        path: __dirname+'/lib',
        filename: '[name].[chunkhash:8].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
