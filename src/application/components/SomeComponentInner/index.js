import React from "react";
import PropTypes from "prop-types";
import "./SomeComponentInner.scss";
import withStore from "../../common/withStore";
import store from "../FirstPage/store";

const SomeComponentInner = ({ data: { firstPageClicksCount } }) => (
  <div className="SomeComponentInner">
    <div className="SomeComponentInner__clicks">{`FirstPage clicks: ${firstPageClicksCount}`}</div>
  </div>
);

SomeComponentInner.propTypes = {
  data: PropTypes.shape({
    firstPageClicksCount: PropTypes.number.isRequired
  }).isRequired
};

export default withStore(SomeComponentInner, store);
