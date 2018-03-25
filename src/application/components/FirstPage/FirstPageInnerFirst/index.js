import React from "react";
import PropTypes from "prop-types";

import "./FirstPageInnerFirst.scss";

const FirstPageInnerFirst = ({ match }) => <div className="FirstPageInnerFirst">{`id: ${match.params.id}`}</div>;

FirstPageInnerFirst.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default FirstPageInnerFirst;
