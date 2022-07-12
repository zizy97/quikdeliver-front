
export class Store {

  storeData(key, value) {
    sessionStorage.setItem(key, value);
  }

  getData(key) {
    let value = sessionStorage.getItem(key);
    if (value) {
      return value;
    }
    return null;
  }

  removeData(key) {
    sessionStorage.removeItem(key);
  }

  clearStore() {
    sessionStorage.clear();
  }

}

export default Store;
