import React from 'react';
import AutoComplete from './components/AutoComplete';
import Stars from './components/Stars';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <AutoComplete />
        <Stars />
      </div>
    );
  }
}

export default App;
