var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var srcDir = path.resolve(process.cwd(), 'src');

//获取多页面的每个入口文件，用于配置中的entry
function getEntry() {
    var jsPath = path.resolve(srcDir, 'js');
    var dirs = fs.readdirSync(jsPath);
    var matchs = [], files = {};
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        console.log(matchs);
        if (matchs) {
            files[matchs[1]] = path.resolve(srcDir, 'js', item);
        }
    });
    //console.log(JSON.stringify(files));
    return files;
}

module.exports = {
    cache: true,
    devtool: "source-map",
    entry: getEntry(),
    output: {
        path: path.join(__dirname, "dist/js/"),
        publicPath: "dist/js/",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    resolve: {
        alias: {
            jquery: srcDir + "/js/lib/jquery.min.js",
            core: srcDir + "/js/core",
            ui: srcDir + "/js/ui"
        }
    },
    plugins: [
        new CommonsChunkPlugin('common.js'),
        new webpack.HotModuleReplacementPlugin()
        //压缩js代码
        // new uglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
		loaders: [
            {
                exclude:["./node_modules/","./src/css","./src/style"],
                test: /\.less$/,
                loader: ["style","css","less"]
            },
            { 
                test: /\.jsx$/,         // Match both .js and .jsx files
                exclude: /node_modules/, 
                loader: ["babel"],
                query:
                      {
                        presets:['react','es2015']
                      }
            }
        ]
	},
    devServer:{
        hot:false,
        inline:true
    }
};