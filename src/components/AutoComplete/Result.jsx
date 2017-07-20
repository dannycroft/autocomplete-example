import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return <option value={this.props.name} />;
  }
}

export default Result;
