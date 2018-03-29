import React from "react";
import PropTypes from "prop-types";
import withStore from "../../common/withStore";
import withResetStoreOnMountAndUnMount from "../../common/withResetStoreOnMountAndUnMount";
import store from "./store";
import "./Home.scss";

const Home = ({ homePageClicksCount }) => (
  <div className="Home" onClick={() => store.set({ homePageClicksCount: homePageClicksCount + 1 })}>
    <div className="Home__clicks">{`Home clicks: ${homePageClicksCount}`}</div>
  </div>
);

Home.propTypes = {
  homePageClicksCount: PropTypes.number.isRequired
};

export default withResetStoreOnMountAndUnMount(withStore(Home, store), store);
