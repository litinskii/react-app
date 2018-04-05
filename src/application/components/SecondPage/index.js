import React from "react";
import PropTypes from "prop-types";
import "./SecondPage.scss";
import globalStore from "../globalStore";
import withStore from "../../common/withStore";

const SecondPage = ({ clickCount }) => (
  <div className="SecondPage">
    <div className="SecondPage__clicks">{`All time HomePage and SomeComponentInner clicks: ${clickCount}`}</div>
  </div>
);

SecondPage.propTypes = {
  clickCount: PropTypes.number.isRequired
};

export default withStore(SecondPage, globalStore);
