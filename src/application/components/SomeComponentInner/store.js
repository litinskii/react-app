import Store from "../../common/StoreClass";

class SomeComponentInnerStore extends Store {
  incrementClicksCount() {
    this.set({ someComponentInnerClicksCount: this.get("someComponentInnerClicksCount") + 1 });
  }
}

export default new SomeComponentInnerStore({ someComponentInnerClicksCount: 0 });
