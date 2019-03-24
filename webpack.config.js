const path = require('path');

module.exports = (env, argv) => ({
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js'],
    },
    watch: true,
    devtool: argv.mode === 'development' ? 'source-map' : 'none',
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint-loader'],
                include: path.join(__dirname, 'src'),
                exclude: path.join(__dirname, 'src/app/container'),
            },
        ],
        eslint: {
            configFile: './.eslintrc', // your .eslintrc file
            emitWarning: true,
        },
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
});
