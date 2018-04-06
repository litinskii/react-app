import React, { Component } from "react";
import PropTypes from "prop-types";
import withOnUnMount from "../../common/withOnUnMount";
import withStore from "../../common/withStore";
import withResetStoreOnMountAndUnMount from "../../common/withResetStoreOnMountAndUnMount";
import store from "./store";
import globalStore from "../globalStore";
import { getHomePageClicksCount, saveHomePageClicksCount } from "../../api/settingsHomePage";
import "./Home.scss";
import LoaderOverlay from "../LoaderOverlay";

const countClicks = () => {
  store.incrementHomePageClicksCount();
  globalStore.incrementClicksCount();
};

class Home extends Component {
  async componentDidMount() {
    try {
      store.setHomePageClicksCount(await getHomePageClicksCount());
    } finally {
      store.set("loading", false);
    }
  }

  render() {
    const { homePageClicksCount, loading } = this.props;
    return (
      <div className="Home" onClick={() => countClicks()}>
        {loading ? <LoaderOverlay /> : undefined}
        <div className="Home__clicks">{`Home clicks: ${homePageClicksCount}`}</div>
      </div>
    );
  }
}

Home.propTypes = {
  homePageClicksCount: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
};

export default withOnUnMount(withResetStoreOnMountAndUnMount(withStore(Home, store), store), () =>
  saveHomePageClicksCount(store.get("homePageClicksCount"))
);
