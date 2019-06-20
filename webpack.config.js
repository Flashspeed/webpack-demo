const path                   = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin         = require('webpack-manifest-plugin');

// Link: https://webpack.js.org/plugins/html-webpack-plugin/
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        //Webpack will parse these files and add them to the output folder which in this case is 'dist'
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        // The name of the final js file to be embedded into the main html file
        /* Webpack will generate a separate file for each key in the 'entry' object.
         * It will replace the [name] placeholder with the key(s) in the 'entry' object.
         * In this case there are 2 keys "app" and "print". The generated file names will be
         * 'app.bundle.js' and 'print.bundle.js'.
         * Link: https://webpack.js.org/configuration/output/#outputfilename
         */
        filename: "[name].bundle.js",

        // ALL the translated code will be put inside a folder named 'dist'. Can be named anything.
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        // Remove any unused files in the 'dist' directory before building
        new CleanWebpackPlugin(),

        /* This will generate a manifest.json file in the root output directory with a
         * mapping of all source file names to their corresponding output file.
         */
        new ManifestPlugin(),

        /*  HtmlWebpackPlugin by default will generate its own index.html file.
         *  it automatically inject all necessary CSS, JS, manifest and favicon
         *  files into the HTML file.
         */
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ]
};