import React, { Component } from "react";

export default (WrappedComponent, store) =>
  class extends Component {
    constructor(...args) {
      super(...args);
      this.state = store.toJSON();
      this.emitChange = this.emitChange.bind(this);
    }

    componentWillMount() {
      store.events.on("change", this.emitChange);
    }

    componentWillUnmount() {
      store.events.off("change", this.emitChange);
    }

    emitChange() {
      this.setState(store.toJSON());
    }

    render() {
      return <WrappedComponent data={this.state} {...this.props} />;
    }
  };
