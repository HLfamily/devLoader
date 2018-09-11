const path = require('path')
const isDev = process.env.NODE_ENV === 'development' 
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader',{
					loader:'html-minify-loader',
					options: {
						comments: false //压缩完之后是否要带上注释文件
					}
				}]
			}
		]
	},
	resolveLoader: {
        modules: [path.join(__dirname, './src/loaders'), 'node_modules']
    },
	plugins:[
	    new webpack.DefinePlugin({
	    	'process.env': {
	    		NODE_ENV: isDev ? '"development"' : '"production"'
	    	}
	    }),
	    new HtmlWebpackPlugin(),
	    new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
   	    port: 8000,
   	    host: '0.0.0.0',
   	    overlay: {
   	  	    errors: true
   	    },
    },
	performance: {
		hints: false
	}
}

module.exports = config