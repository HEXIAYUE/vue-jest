import { sum } from "../../src/assets/test/sum";
test("add 1 = 1", () => {
	expect(sum(1)).toBe(1);
});
test("add 1 + 2 = 3", () => {
	expect(sum(1, 2)).toBe(3);
});
test("add 1 + 2 + 3 =  6", () => {
	expect(sum(1, 2, 3)).toBe(6);
});
