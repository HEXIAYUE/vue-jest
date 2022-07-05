import Calculator from "../../src/assets/test/calculator";

let calculator = null;
// beforeAll通常可用来初始化
beforeAll(() => {
	calculator = new Calculator();
	console.log("beforeAll执行");
});

beforeEach(() => {
	console.log("beforeEach执行");
});

afterAll(() => {
	console.log("afterAll执行");
});

afterEach(() => {
	console.log("afterEach执行");
});

test("测试Calculator中的add方法", () => {
	calculator.add();
	expect(calculator.num).toBe(2);
});
test("测试Calculator中的minus方法", () => {
	calculator.minus();
	expect(calculator.num).toBe(0);
});
test("测试Calculator中的multiply方法", () => {
	calculator.multiply();
	expect(calculator.num).toBe(2);
});
test("测试Calculator中的divide方法", () => {
	calculator.divide();
	expect(calculator.num).toBe(0.5);
});
