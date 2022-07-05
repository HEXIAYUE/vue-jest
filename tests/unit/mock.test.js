import { run } from "../../src/assets/test/mock";
import axios from "axios";
import * as request from "../../src/assets/test/request";
test("测试 jest.fn()", () => {
	const func = jest.fn();
	func.mockImplementation(() => {
		return "this is mock fn 3";
	});
	func.mockImplementationOnce(() => {
		return "this is mock fn 1";
	});
	func.mockImplementationOnce(() => {
		return "this is mock fn 2";
	});
	const a = run(func);
	const b = run(func);
	const c = run(func);
	console.log(a);
	console.log(b);
	console.log(c);
});

test("测试 jest.fn()", () => {
	const func = jest.fn();
	func.mockImplementation(() => {
		return "this is mock fn 1";
	});
	func.mockImplementationOnce(() => {
		return "this is mock fn 2";
	});
	const a = run(func);
	const b = run(func);
	const c = run(func);
	console.log(a);
	console.log(b);
	console.log(c);
});

// true
test("测试 jest.fn()是否被调用", () => {
	const func = jest.fn();
	run(func);
	expect(func).toBeCalled();
});

// true
test("测试 jest.fn()的参数", () => {
	const func = jest.fn();
	run(func);
	expect(func).toBeCalledWith("this is run!");
});

jest.mock("axios");

test("测试request", () => {
	const obj = {
		a: 1,
		b: 2,
	};

	axios.get.mockResolvedValue({
		data: {
			a: 1,
			b: 2,
		},
	});
	return request.requestPromise().then((res) => {
		expect(res.data).toEqual(obj);
	});
});
