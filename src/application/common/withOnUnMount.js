import React, { Component } from "react";

export default (WrappedComponent, componentWillUnmount) =>
  class extends Component {
    componentWillUnmount() {
      componentWillUnmount();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
