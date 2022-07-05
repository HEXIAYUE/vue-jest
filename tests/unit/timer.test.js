import { timer } from "../../src/assets/test/timer";
// true
test("测试timer", () => {
	timer(() => {
		expect(1 + 1).toBe(3);
	});
});
// false
test("测试timer 加done", (done) => {
	timer(() => {
		expect(1 + 1).toBe(3);
		done();
	});
});

// true
test("测试useFakeTimers", () => {
	jest.useFakeTimers();
	const fn = jest.fn();
	timer(fn);
	// 时间快进2秒
	jest.advanceTimersByTime(2000);
	expect(fn).toHaveBeenCalledTimes(2);
});
