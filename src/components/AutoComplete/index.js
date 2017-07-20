import React from 'react';
import { fromJS } from 'immutable';
import AutoCompleteInput from './Input';
import AutoCompleteResults from './Results';
import Satellites from '../../data/satellites.json';
import './AutoComplete.css';

const results = fromJS(Satellites);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.filterResults('', 10),
    };
  }

  filterResults = (query, limit) => {
    return results
      .filter(result => {
        return result.get('name').toLowerCase().includes(query);
      })
      .slice(0, limit);
  };

  handleQueryUpdate = event => {
    this.setState({
      results: this.filterResults(event.target.value, 10),
    });
  };

  render() {
    return (
      <div className="autocomplete">
        <AutoCompleteInput queryUpdated={this.handleQueryUpdate} />
        <AutoCompleteResults results={this.state.results} />
      </div>
    );
  }
}

export default App;
