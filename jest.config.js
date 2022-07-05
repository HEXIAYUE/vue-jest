module.exports = {
	preset: "@vue/cli-plugin-unit-jest",
	testMatch: [
		"**/__tests__/**/*.[tj]s?(x)", // _test_/目录的js，ts，jsx，tsx文件 官方推荐
		"**/?(*.)+(spec|test).[tj]s?(x)", // 后缀为spec或者test的js，ts，jsx，tsx文件
	],
	verbose: true, // 支持控制台打印测试例子描述语
	testEnvironmentOptions: {
		url: "http://localhost:8080", // 自己的URL
	},
};
