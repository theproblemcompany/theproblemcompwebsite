const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    mode: 'production',
    entry: '/src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }

        
        ]
    }, 
    
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/privacy.html",
            filename: "./privacy.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/toolbox.html",
            filename: "./toolbox.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/events.html",
            filename: "./events.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/scaleup.html",
            filename: "./scaleup.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/directiarobot.html",
            filename: "./directiarobot.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/workshopautomatizare.html",
            filename: "./workshopautomatizare.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/snippets/html1.html",
            filename: "./html1.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/snippets/html2.html",
            filename: "./html2.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/snippets/html3.html",
            filename: "./html3.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/snippets/html4.html",
            filename: "./html4.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/snippets/dropdownsidebar.html",
            filename: "./dropdownsidebar.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/snippets/sidebar.html",
            filename: "./sidebar.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}