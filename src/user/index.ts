import { storage } from "../lib/storage";

export const saveUserName = (userName: string) => {
    storage.save({
        key: 'userName',
        value: userName
    });
};

export const getUserName = () => {
    storage.get({ key: 'userName' });
};
