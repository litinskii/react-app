import React, { Component } from "react";
import PropTypes from "prop-types";
import { sum } from "lodash";
import "./SecondPage.scss";
import globalStore from "../globalStore";
import withStore from "../../common/withStore";
import { getHomePageClicksCount } from "../../api/settingsHomePage";
import { getSomeComponentInnerClicksCount } from "../../api/settingsSomeComponentInner";
import LoaderOverlay from "../LoaderOverlay";

class SecondPage extends Component {
  constructor(...args) {
    super(...args);
    this.state = { loading: true };
  }

  async componentDidMount() {
    try {
      globalStore.setClicksCount(sum(await Promise.all([getHomePageClicksCount(), getSomeComponentInnerClicksCount()])));
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { clickCount } = this.props;
    const { loading } = this.state;
    return (
      <div className="SecondPage">
        {loading ? <LoaderOverlay /> : undefined}
        <div className="SecondPage__clicks">{`All time HomePage and SomeComponentInner clicks: ${clickCount}`}</div>
      </div>
    );
  }
}

SecondPage.propTypes = {
  clickCount: PropTypes.number.isRequired
};

export default withStore(SecondPage, globalStore);
