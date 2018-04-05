import Store from "../../common/StoreClass";
import { get, save } from "../../common/api";

class HomeStore extends Store {
  async loadHomePageClicksCount() {
    this.set("loading", true);
    try {
      const { clicksCount } = await get("/api/settingsHomePage");
      this.set({
        homePageClicksCount: clicksCount,
        loading: false
      });
    } catch (error) {
      console.error("Error while 'loadHomePageClicksCount'", error);
      this.set("loading", false);
    }
  }

  saveHomePageClicksCount() {
    try {
      save("/api/settingsHomePage", { clicksCount: this.get("homePageClicksCount") });
    } catch (error) {
      console.error("Error while 'saveHomePageClicksCount'", error);
    }
  }
}

export default new HomeStore({ homePageClicksCount: 0, loading: false });
