import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the correct components', () => {
    const wrapper = render(<App />);

    expect(wrapper.find('.autocomplete').length).toEqual(1);
    expect(wrapper.find('.autocomplete__label').length).toEqual(1);
    expect(wrapper.find('.autocomplete__input').length).toEqual(1);
    expect(wrapper.find('#results').length).toEqual(1);
  });
});
