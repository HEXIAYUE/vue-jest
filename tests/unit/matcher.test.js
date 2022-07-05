// 2 test和expect
test("1+1=2", () => {
	expect(1 + 1).toBe(2);
});

// 期望结果是数组类型 toEqual true
test("结果是数组类型", () => {
	expect([1, 2]).toEqual(expect.any(Array));
});

// 2.1、toBe

// toBe true
test("1+1=2", () => {
	expect(1 + 1).toBe(2);
});
// toBe false
test("'1'+'1'=2", () => {
	expect("1" + "1").toBe(2);
});
// toBe false
test("数组相等测试", () => {
	const arr = [1, 2, 3];
	expect(arr).toBe([1, 2, 3]);
});

// 2.1 toEqual

// toEqual true
test("判断数组相同", () => {
	const arr = [1, 2];
	expect(arr).toEqual([1, 2]);
});

// toEqual true
test("判断对象相同", () => {
	const obj = {
		a: 1,
	};
	expect(obj).toEqual({
		a: 1,
	});
});

// toEqual false
test("判断==相同", () => {
	let a = undefined;
	let b = null;
	expect(a).toEqual(b);
});

// toEqual false
test("'2'=2", () => {
	expect("2").toBe(2);
});

// 2.2 toBeNull

//  toBeNull true
test("判断null", () => {
	expect(null).toBeNull();
});

// 2.2 toBeUndefined

// toBeUndefined true
test("判断undefined", () => {
	expect(undefined).toBeUndefined();
});

// 2.2 toBeTruthy

// toBeTruthy true
test("在if中会返回true", () => {
	expect(1).toBeTruthy();
	expect([]).toBeTruthy();
	expect({}).toBeTruthy();
});

// 2.2 toBeFalsy

// toBeFalsy true
test("在if中会返回false", () => {
	expect(0).toBeFalsy();
	expect("").toBeFalsy();
});

// 2.3 not

// not true
test("取非", () => {
	expect(0).not.toBeTruthy();
});

// 2.3 toBeGreaterThan

// toBeGreaterThan true
test("大于", () => {
	expect(10).toBeGreaterThan(9);
});

// 2.3 toBeGreaterThanOrEqual

// toBeGreaterThanOrEqual true
test("大于等于", () => {
	expect(10).toBeGreaterThanOrEqual(9);
	expect(10).toBeGreaterThanOrEqual(10);
});

// 2.3 toBeLessThan

// toBeLessThan true
test("小于", () => {
	expect(9).toBeLessThan(10);
});

// 2.3 toBeLessThanOrEqual

// toBeLessThanOrEqual true
test("小于等于", () => {
	expect(9).toBeLessThanOrEqual(10);
	expect(10).toBeLessThanOrEqual(10);
});

// 2.4 toBeCloseTo

// toBe false
test("0.1 + 0.2 == 0.3", () => {
	expect(0.1 + 0.2).toBe(0.3);
});
// toBeCloseTo true
test("0.1 + 0.2 == 0.3 5精度", () => {
	expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
});

// 2.5 toMatch

// toMatch true
test("'sa' 包含于 'sabj'", function () {
	expect("sabj").toMatch("sa");
});

// 2.5 toHaveLength

// toHaveLength false
test("Number类型没有length属性", () => {
	expect(2).toHaveLength(1);
});
// toHaveLength true
test("[1,2,3] 的长度为3", () => {
	expect([1, 2, 3]).toHaveLength(3);
});

// 2.5 toContain

// toContain false
test("['1',1]中存在1", () => {
	expect(["1", 2]).toContain(1);
});

// toContain true
test("['a','b']中存在a", () => {
	expect(["a", "b"]).toContain("a");
});

// 2.5 toHaveProperty

// toHaveProperty false
test("该对象存在字段name", () => {
	const obj = {
		a: 1,
	};
	expect(obj).toHaveProperty("name");
});

// toHaveProperty true
test("该对象存在字段name,值为test", () => {
	const obj = {
		name: "test",
	};
	expect(obj).toHaveProperty("name", "test");
});
