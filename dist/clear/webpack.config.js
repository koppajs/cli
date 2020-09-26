const path = require('path');

module.exports = {
    "mode": "none",
    entry: ["babel-polyfill", "./src/index.js"],
    "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js"
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    "module": {
        "rules": [
            {
                "test": /\.css$/,
                "exclude": /node_modules/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env",
                        ]
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico|svg|woff|woff2|ttf|wav|mp3|mp4|pdf)$/i,
                use: 'file-loader?name=[path][name].[ext]'
            }
        ]
    }
}
