import React from 'react';
import {shallow, render} from 'enzyme';
import {fromJS} from 'immutable';
import Satellites from '../../data/satellites.json';

import Results from './Results';

const results = fromJS(Satellites).slice(0, 10);

describe('AutoCompleteResults', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Results results={results}/>);
  });

  it('contains the correct components', () => {
    const wrapper = render(<Results results={results}/>);
    const datalist = wrapper.find('datalist');

    expect(datalist.length).toBe(1);
    expect(datalist.prop('id')).toBe('results');
    expect(datalist.find('option').length).toBe(10);
  });
});
