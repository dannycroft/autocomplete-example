import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

class Results extends React.Component {
  static propTypes = {
    results: PropTypes.object,
  };

  render() {
    return (
      <datalist id="results">
        {this.props.results.map(result => {
          return <Result name={result.get('name')} key={result.get('norad_id')} />;
        })}
      </datalist>
    );
  }
}

export default Results;
