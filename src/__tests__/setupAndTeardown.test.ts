describe("setup and teardown examples", () => {
    // TODO: 04/02/24 se ejecuta antes que todos los tests
    beforeAll(() => {
        console.log("beforeAll: runs before all tests");
    })

    // TODO: 04/02/24 se ejecuta antes de cada test
    beforeEach(() => {
        console.log("beforeEach: runs before each test");
    })

    // TODO: 04/02/24 se ejecuta después de todos los tests
    afterAll(() => {
        console.log('runs after all tests');
    })

    // TODO: 04/02/24 se ejecuta después de cada test
    afterEach(() => {
        console.log("runs after each test");
    })

    test("example 1", () => {
        expect(true).toBe(true);
    })

    test("example 2", () => {
        expect(true).toBe(true);
    })
});