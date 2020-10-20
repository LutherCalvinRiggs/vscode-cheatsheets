const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",                    // our main JS file
        about: "./src/about.js",                    // our about JS file
        contact: "./src/contact.js"                 // our contact JS file
    },
    output: {
        filename: "[name].bundle.js",               // creates bundle.js files for each html page
        path: path.resolve(__dirname, "dist")       // where we look for the output
    },
    optimization: {                                 // looks for code repeated between bundles and
        splitChunks: {                              // creates a vendor bundle for that code
            chunks: "all"
        }
    },
    plugins: [new HtmlWebpackPlugin()],             // add the html-webpack-plugin
    devServer: {                                    // node for devServer
        contentBase: path.join(__dirname, "dist"),  
        port: 9000                                  // port to run on
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // whenever a .js file is found, babel should transpile it
                exclude: /(node_modules)/,  // exclude the node_modules folder
                use: {
                    loader: "babel-loader",  // use bable-loader
                    options: {
                        // compile to the standards of preset-env
                        presets: ['@babel/preset-env', '@babel/preset-react']  
                    }
                }
            },
            {   // this object will look for css files and transform them
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {   // this object will load our URLs
                test: /\.(jpg|png)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            }
        ]
    }
}