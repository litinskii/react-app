import React from "react";
import PropTypes from "prop-types";
import withStore from "../../common/withStore";
import withResetStoreOnMountAndUnMount from "../../common/withResetStoreOnMountAndUnMount";
import store from "./store";
import globalStore from "../globalStore";
import "./Home.scss";

const countClicks = ({ homePageClicksCount } = {}) => {
  store.set({ homePageClicksCount: homePageClicksCount + 1 });
  globalStore.incrementClicksCount();
};

const Home = ({ homePageClicksCount }) => (
  <div className="Home" onClick={() => countClicks({ homePageClicksCount })}>
    <div className="Home__clicks">{`Home clicks: ${homePageClicksCount}`}</div>
  </div>
);

Home.propTypes = {
  homePageClicksCount: PropTypes.number.isRequired
};

export default withResetStoreOnMountAndUnMount(withStore(Home, store), store);
