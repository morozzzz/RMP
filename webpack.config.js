const path = require('path');

module.exports = (env, argv) => {    
    return {
        context: path.join(__dirname, 'src'),
        entry: './index.js',
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'dist')
        },
        resolve: {
            extensions: ['.js']
        },
        watch: true,
        devtool: argv.mode === 'development' ? 'source-map' : 'none',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                }
            ]
        }
    }
}