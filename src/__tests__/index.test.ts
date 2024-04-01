import type * as TestFunctions from "../index";

const {sum} = jest.requireActual<typeof TestFunctions>("../index.ts");
const successCases = [
    {
        id: 0,
        input: {a:1, b:1},
        output: 2
    },
    {
        id: 1,
        input: {a:5, b:10},
        output: 15
    },
    {
        id: 2,
        input: {a:8, b:9},
        output: 17
    },
    {
        id: 3,
        input: {a:7, b:5},
        output: 12
    },
];

describe("Test sum function", () => {
    it.each(successCases)("success case $id", ({ input, output }) => {
        const { a,b } = input;
        expect(sum(a, b)).toBe(output);
    })
})