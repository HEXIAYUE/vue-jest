const path = require("path");

function resolve(dir) {
	return path.join(__dirname, dir);
}

const Timestamp = new Date().getTime();
module.exports = {
	// 选项...
	publicPath: "./",
	productionSourceMap: false,
	// 输出文件目录
	outputDir: "dist",
	assetsDir: "static",
	// eslint-loader 是否在保存的时候检查
	lintOnSave: true,
	devServer: {
		host: "localhost",
		port: 8080,
		disableHostCheck: true,
		compress: false, // 开启压缩
		// proxy: {
		// 	'/home': {
		// 		target: 'https://10.25.12.237',
		//         secure: false,
		// 		changeOrigin: true,
		//         ws:true,
		// 		pathRewrite: {
		// 			// '^/home': ''
		// 		}
		// 	}
		// }
	},
	chainWebpack: (config) => {
		config.resolve.alias.set("@", resolve("src"));

		config.plugin("html").tap((args) => {
			args[0].title = process.env.VUE_APP_NAME;
			return args;
		});

		// 打包分析添加
		// config.output.filename('js/[name].[hash].js').end();
		// config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
	},

	configureWebpack: {
		// 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
		output: {
			filename: `./static/js/[name].${process.env.VUE_APP_VERSION}.${Timestamp}.js`,
			chunkFilename: `./static/js/[name].${process.env.VUE_APP_VERSION}.${Timestamp}.js`,
		},
		performance: {
			hints: "warning",
			// 入口起点的最大体积 整数类型（以字节为单位）
			maxEntrypointSize: 50000000,
			// 生成文件的最大体积 整数类型（以字节为单位 300k）
			maxAssetSize: 30000000,
			// 只给出 js 文件的性能提示
			assetFilter: function (assetFilename) {
				return assetFilename.endsWith(".js");
			},
		},
	},

	css: {
		extract: {
			filename: `./static/css/[name].${process.env.VUE_APP_VERSION}.${Timestamp}.css`,
			chunkFilename: `./static/css/[name].${process.env.VUE_APP_VERSION}.${Timestamp}.css`,
		},
	},
};
