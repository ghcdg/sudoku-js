module.exports = {
    entry:  __dirname + "/src/js/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname+"/dist/assets",//打包后的文件存放的地方
        filename: "[name].js"//打包后输出文件的文件名
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /(\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                           "es2015"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    }

};

