import { User } from "../../redux/reducers/userReducer";

export enum StorageItem {
  USER = "user",
  TOKEN = "token",
}

// You can ask why I have wrapped localStorage and in this way. In case you'll need object
// from localStorage it is better in my opinion to add a function and use it in this manner
// Storage.getUser (this is in case if the user is JSON).
class Storage {
  set = (key: StorageItem, value: string) => {
    localStorage.setItem(key, value);
  };

  get = (key: StorageItem): string | null => {
    return localStorage.getItem(key);
  };

  setUser = (user: User) => {
    this.set(StorageItem.USER, JSON.stringify(user));
  };

  getUser = (): User | null => {
    const user = this.get(StorageItem.USER);

    return user ? JSON.parse(user) : null;
  };

  clear = () => {
    localStorage.clear();
  };
}

const storage = new Storage();

export default storage;
