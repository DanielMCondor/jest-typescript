import { storage } from '../lib/storage';
import type * as TestFunctions from '../user';

jest.mock("../lib/storage");

const { saveUserName, getUserName } = jest.requireActual<typeof TestFunctions>("../user")
const storage1 = storage as jest.Mocked<typeof storage>;


describe("example user", () => {
    test("test save", () => {
        const username = "Jeremy"
        saveUserName(username);
        expect(storage.save).toHaveBeenCalledTimes(1);
        expect(storage.save).toHaveBeenCalledWith({key: 'userName', value: username});
    });

    test.only("test get", () => {
        const username = "Jeremy"
        storage1.get.mockReturnValueOnce(username);
        const result = getUserName()
        
        // expect(result).toBe(username);
        expect(storage.get).toHaveBeenCalledTimes(1);
        expect(storage.get).toHaveBeenCalledWith({key: 'userName'});
    })
})