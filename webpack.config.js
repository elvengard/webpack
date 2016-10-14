module.exports = {
	entry:"./app",
	output:{
		path:"./output",
		filename:"output.js"
	},
	module:{
		loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
	}
}
