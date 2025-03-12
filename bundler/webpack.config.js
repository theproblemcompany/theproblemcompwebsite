const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');

// Helper function to get all HTML files from a directory recursively
const getHtmlFiles = (dir) => {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    return files.flatMap(file => {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
            return getHtmlFiles(fullPath); // Recursively get files from subdirectories
        }
        return file.name.endsWith('.html') ? [fullPath] : [];
    });
};

// Directories to include
const mainHtmlDir = 'src';
const blogpostsDir = 'src/blogposts';

// Get all HTML files from the directories
const htmlFiles = [
    ...getHtmlFiles(mainHtmlDir),
    ...getHtmlFiles(blogpostsDir),
];

module.exports = {
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    mode: 'production',
    entry: './src/index.js', // Corrected relative path
    module: {
        rules: [
            {
                test: /\.(txt|csv|mmdb)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: "[path][name].[ext]",
                      emitFile: true,
                    },
                  },
                ],
              },
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
        // Generate HTML files dynamically
        ...htmlFiles.map(file => new HtmlWebPackPlugin({
            filename: path.relative('src', file), // Output relative to 'src' (ensure folder structure is maintained)
            template: file, // Input HTML file
        })),

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),

        // Copy the `media` folder from blogposts
  
    ]
};
