type typeCb = (value: boolean) => void;
// TODO: 04/02/24 Callbacks
const asyncCallback = (cb: typeCb) => {
    setTimeout(() => {
        cb(true);
    }, 1000)
}

// TODO: 04/02/24 Promise
const asyncPromise = () => new Promise((resolve) => resolve(true));


describe("async code", () => {
    test("example of async with callback", (done) => {
        asyncCallback((result) => {
            expect(result).toBe(true);
            done();
        });
    });

    test("example of async with promises", () =>  {
        return asyncPromise().then((result) => expect(result).toBe(true));
    });

    test.only("example of async with async await", async() => {
        const result = await asyncPromise();
        expect(result).toBe(true);
    });
});