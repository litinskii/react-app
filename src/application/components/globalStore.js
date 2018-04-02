import Store from "../common/StoreClass";

class GlobalStore extends Store {
  incrementClicksCount() {
    this.set({ clickCount: this.get("clickCount") + 1 });
  }
}

export default new GlobalStore({ clickCount: 0 });
