const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

console.log(path.join(__dirname, 'index.tsx'));

module.exports = {
	mode: 'none',
	entry: {
		app: path.join(__dirname, 'index.tsx'),
	},
	target: 'web',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node_modules/',
			},
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		port: 3000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.html'),
		}),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(dotenv.config().parsed),
		}),
	],
};
