var webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'app.js'
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
        ])
    ]
};


