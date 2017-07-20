import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  static propTypes = {
    queryUpdated: PropTypes.func,
  };

  queryUpdated = event => {
    this.props.queryUpdated(event);
  };

  render() {
    return (
      <label className="autocomplete__label">
        German Satellite Search
        <input className="autocomplete__input" list="results" onChange={this.queryUpdated} />
      </label>
    );
  }
}

export default Input;
