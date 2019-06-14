const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // The name of the final js file to be embedded into the main html file
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // Test to see if this condition is met. Condition: if a file ends with '.css'
                /* Webpack uses a regular expression to determine which files it should look for
                   and serve to a specific loader
               */
                test: /\.css$/,

                //Webpack loaders are read from last to first. Here 'css-loader' runs before 'style-loader'
                use: [
                    'style-loader', // Includes the parsed css into the DOM by injecting a <style> tag.
                    'css-loader' // Parses css
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};