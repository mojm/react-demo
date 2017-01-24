"use srtice"
const path = require('path');
const srcPath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './build');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');


module.exports = {
	devtool: 'eval-source-map',
	entry: path.resolve(srcPath, 'main.js'),
	output: {
		path: buildPath,
		filename: 'main.js',
		publicPath: './'
	},

	devServer: {
		contentBase: "./build",
		color: true,
		inline: true
	},

	resolve: {
		extensions: ['', '.js', 'jsx']
	},

	plugins: [
		new webpack.ProvidePlugin({
			$:'jquery',
			jQuery: 'jquery',
			'window.jQuery':'jquery',
			'window.$': 'jquery'
		}),
		new HtmlWebpackPlugin({
			title: "蝙蝠侠",
			template: "src/test.html"
		})
	],

	module: {
		preLoader: [{
			test: /\.(js|jsx)$/,
			include: srcPath,
			loader: 'eslint-loader'

		}],
		loaders: [{
				test: require.resolve('jquery'),
				loader: 'expose?$!expose?jQuery'
			},{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}, {
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader?{browsers: ["last 2 version"]}!sass-loader?outputStyle=expanded'
			}, {
				test: /\.json$/,
				loader: 'json-loader'
			}, {
				test: /\.(png|jpg|gif|eot|woff2|woff|svg)$/,
				loader: 'url-loader?limit=8192'
			}

		]
	}

}