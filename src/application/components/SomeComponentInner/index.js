import React from "react";
import PropTypes from "prop-types";
import "./SomeComponentInner.scss";
import withStore from "../../common/withStore";
import withResetStoreOnMountAndUnMount from "../../common/withResetStoreOnMountAndUnMount";
import firstPageStore from "../FirstPage/store";
import store from "./store";
import globalStore from "../globalStore";

const countClicks = () => {
  store.incrementClicksCount();
  globalStore.incrementClicksCount();
};

const SomeComponentInner = ({ firstPageClicksCount, someComponentInnerClicksCount }) => (
  <div className="SomeComponentInner" onClick={countClicks}>
    <div className="SomeComponentInner__clicks">{`FirstPage clicks: ${firstPageClicksCount}`}</div>
    <div className="SomeComponentInner__clicks">{`SomeComponentInner clicks: ${someComponentInnerClicksCount}`}</div>
  </div>
);

SomeComponentInner.propTypes = {
  firstPageClicksCount: PropTypes.number.isRequired,
  someComponentInnerClicksCount: PropTypes.number.isRequired
};

export default withStore(withResetStoreOnMountAndUnMount(withStore(SomeComponentInner, store), store), firstPageStore);
