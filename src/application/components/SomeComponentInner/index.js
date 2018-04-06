import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SomeComponentInner.scss";
import withOnUnMount from "../../common/withOnUnMount";
import withStore from "../../common/withStore";
import withResetStoreOnMountAndUnMount from "../../common/withResetStoreOnMountAndUnMount";
import firstPageStore from "../FirstPage/store";
import store from "./store";
import globalStore from "../globalStore";
import { getSomeComponentInnerClicksCount, saveSomeComponentInnerClicksCount } from "../../api/settingsSomeComponentInner";
import LoaderOverlay from "../LoaderOverlay";

const countClicks = () => {
  store.incrementClicksCount();
  globalStore.incrementClicksCount();
};

class SomeComponentInner extends Component {
  async componentDidMount() {
    try {
      store.setSomeComponentInnerClicksCount(await getSomeComponentInnerClicksCount());
    } finally {
      store.set("loading", false);
    }
  }

  render() {
    const { firstPageClicksCount, someComponentInnerClicksCount, loading } = this.props;
    return (
      <div className="SomeComponentInner" onClick={countClicks}>
        {loading ? <LoaderOverlay /> : undefined}
        <div className="SomeComponentInner__clicks">{`FirstPage clicks: ${firstPageClicksCount}`}</div>
        <div className="SomeComponentInner__clicks">{`SomeComponentInner clicks: ${someComponentInnerClicksCount}`}</div>
      </div>
    );
  }
}

SomeComponentInner.propTypes = {
  firstPageClicksCount: PropTypes.number.isRequired,
  someComponentInnerClicksCount: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
};

export default withOnUnMount(withStore(withResetStoreOnMountAndUnMount(withStore(SomeComponentInner, store), store), firstPageStore), () =>
  saveSomeComponentInnerClicksCount(store.get("someComponentInnerClicksCount"))
);
