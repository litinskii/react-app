import React, { Component } from "react";
import PropTypes from "prop-types";
import withOnUnMount from "../../common/withOnUnMount";
import withStore from "../../common/withStore";
import withResetStoreOnMountAndUnMount from "../../common/withResetStoreOnMountAndUnMount";
import store from "./store";
import globalStore from "../globalStore";
import "./Home.scss";

const countClicks = ({ homePageClicksCount } = {}) => {
  store.set({ homePageClicksCount: homePageClicksCount + 1 });
  globalStore.incrementClicksCount();
};

class Home extends Component {
  componentDidMount() {
    store.loadHomePageClicksCount();
  }

  render() {
    const { homePageClicksCount } = this.props;
    return (
      <div className="Home" onClick={() => countClicks({ homePageClicksCount })}>
        <div className="Home__clicks">{`Home clicks: ${homePageClicksCount}`}</div>
      </div>
    );
  }
}

Home.propTypes = {
  homePageClicksCount: PropTypes.number.isRequired
};

export default withOnUnMount(withResetStoreOnMountAndUnMount(withStore(Home, store), store), () => store.saveHomePageClicksCount());
