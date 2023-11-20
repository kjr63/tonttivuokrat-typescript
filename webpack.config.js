//console.log(__dirname);
//const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require('path');
//const { WebpackWarPlugin } = require('webpack-war-plugin');

//export funktio

module.exports = function (env) {
	const isProduction = ( env === 'production' );
	return (
		{
			entry: {
				app: "./src/index.tsx"
				//blog: "./public/jsx/components/blog.js"
			},
			mode: isProduction ? "production" : "development",
			//target: "web",
			output: {
				path: path.join(__dirname, 'public', 'js'),
				filename: "[name].js"
			},
/* 			plugins: [
				new HtmlWebpackPlugin({
				  template: "./src/index.html",
				}),
				isDevelopment && new webpack.HotModuleReplacementPlugin(),
				isDevelopment && new ReactRefreshWebpackPlugin(),
			], */
			resolve: {
				//modules: [__dirname, "src", "node_modules"],
				extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
			},			
			module: {
				rules: [{
					loader: 'babel-loader',
					//loader: 'ts-loader',
					//test: /\.js$/,
					test: /\.ts$|tsx/,					
					exclude: /node_modules/
				}//, {
				 //   test: /\.scss$/,
				 //   use: "sass-loader"
				//}
				]
			},
			devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
			devServer: {
				contentBase: path.join(__dirname, 'public'),
				hot: true,
			},
			
		}
	);
}

// export olio

/*
module.exports = {
    entry: {
		app: "./public_html/jsx/component/app.jsx",
		blog: "./public_html/jsx/component/blog.jsx"
	},
    mode: "development",
    output: {
        path: path.join(__dirname, 'public_html', 'js'),
        filename: "[name].js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx$/,
            exclude: /node_modules/
        }//, {
         //   test: /\.scss$/,
         //   use: "sass-loader"
        //}
        ]
    },
    devtool: "cheap-module-eval-source-map",
	devServer: {
		contentBase: path.join(__dirname, 'public_html')
	}
}
*/