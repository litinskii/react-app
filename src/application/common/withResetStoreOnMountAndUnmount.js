import React, { Component } from "react";

export default (WrappedComponent, store) =>
  class extends Component {
    componentWillMount() {
      store.resetToDefaults();
    }

    componentWillUnmount() {
      store.resetToDefaults();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
