
describe("matchers", () => {
    test("toBe", () => {
        expect(2+2).toBe(4);
    });

    test("toEqual", () => {
        const data = {one: 1, two: 2};
        data["two"] = 3;
        expect(data).toEqual({one: 1, two: 3});
    });

    test("Strings not", () => {
        expect("team").not.toMatch(/I/);
    });

    test("Strings yeah", () => {
        expect("but there is 'stop' in christoph").toMatch(/stop/);
    })
});