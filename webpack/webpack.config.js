const path = require('path');
const css = require('extract-text-webpack-plugin');
module.exports = {
	entry:{
		app:'./2'
	},
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'build')
	},
	module:{
		rules:[
			
			{
				test:/\.js$/,
				use:'babel-loader'
			},
			{
				test:/\.css$/,
				use:css.extract({
					fallback: "style-loader",
         			 use: "css-loader"
				})
//				[
//					{loader:"style-loader"},
//					{loader:"css-loader"}
//					
//				]
			}
		]
	},
	plugins:[
	   new css("1.css")
	]
}
