var webpack = require('webpack');
const path = require('path');
path: path.resolve(__dirname, 'dist');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/public/", // or path: path.join(__dirname, "dist/js"),
        filename: "bundle.js",
        //publicPath: '/'
    },

resolve: {
    extensions: ['.js', '.jsx']
},

module: {
    rules: [
        {
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: [/node_modules/, /public/],
            options: {
                presets: ["@babel/preset-react","@babel/preset-env"],
                plugins: ["react-hot-loader/babel", "@babel/plugin-transform-runtime"],
            }
        },
        {
            test:/\.css$/,
            use:['style-loader','css-loader'],
        },
        {
            test:/\.(png|jpg|gif)$/,
            use : 'file-loader'
        }
    ]
},
devServer: {
    historyApiFallback: true,
}
};