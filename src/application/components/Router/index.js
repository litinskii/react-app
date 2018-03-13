import React, { Component } from "react";
import page from "page";
import _ from "lodash";

export default class extends Component {
  static displayName = "Router";
  static defaultProps = {
    routes: []
  };
  static propTypes = {
    routes: (props, propName, componentName) => {
      const hasDefaultRoute = _.chain(props[propName])
        .keys()
        .includes("*")
        .value();

      if (!hasDefaultRoute) {
        return new Error(`Invalid prop ${propName} supplied to ${componentName}. Should have have "*" route. Validation failed.`);
      }

      return undefined;
    }
  };

  state = { path: null, context: null };

  componentWillMount() {
    const { routes } = this.props;
    const paths = _.keys(routes);
    _.each(paths, path => page(path, (context, next) => this.setState({ path, context, next })));
    page.start();
  }

  render() {
    const { routes } = this.props;
    const { path, context, next } = this.state;
    const Route = routes[path];

    if (!Route) {
      return undefined;
    }

    return <Route {...{ context, next }} />;
  }
}
