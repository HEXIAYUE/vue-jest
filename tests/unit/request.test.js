import * as request from "../../src/assets/test/request";
test("测试回调请求", (done) => {
	request.requestCallback((res) => {
		const obj = {
			a: 1,
			b: 2,
		};
		expect(res.data[0]).toEqual(obj);
		done();
	});
});

test("测试promise请求", () => {
	return request.requestPromise().then((res) => {
		const obj = {
			a: 1,
			b: 2,
		};
		expect(res.data[0]).toEqual(obj);
	});
});
