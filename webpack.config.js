let webpack = require("webpack");
let { resolve } = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'wwwroot'),
        publicPath: '/',
        filename: 'app.js'
    },
    devServer: {
        contentBase: resolve(__dirname, 'wwwroot'),
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015", "stage-0"],
                        plugins: [["transform-react-jsx", { pragma: "m" }]]
                    }
                }],
            }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ]),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};


