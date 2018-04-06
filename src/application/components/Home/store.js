import Store from "../../common/StoreClass";

class HomeStore extends Store {
  incrementHomePageClicksCount() {
    this.set({ homePageClicksCount: this.get("homePageClicksCount") + 1 });
  }

  setHomePageClicksCount(homePageClicksCount) {
    this.set({ homePageClicksCount });
  }
}

export default new HomeStore({ homePageClicksCount: 0, loading: true });
