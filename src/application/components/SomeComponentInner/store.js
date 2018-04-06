import Store from "../../common/StoreClass";

class SomeComponentInnerStore extends Store {
  incrementClicksCount() {
    this.set({ someComponentInnerClicksCount: this.get("someComponentInnerClicksCount") + 1 });
  }
  setSomeComponentInnerClicksCount(someComponentInnerClicksCount) {
    this.set({ someComponentInnerClicksCount });
  }
}

export default new SomeComponentInnerStore({ someComponentInnerClicksCount: 0, loading: true });
