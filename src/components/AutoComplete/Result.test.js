import React from 'react';
import { shallow, render } from 'enzyme';

import Result from './Result';

describe('AutoCompleteResult', () => {
  it('renders without crashing', () => {
    shallow(<Result />);
  });

  it('contains the correct components', () => {
    const wrapper = render(<Result />);

    expect(wrapper.find('option').length).toEqual(1);
  });

  it('sets the correct result value', () => {
    const mockValue = 'Spiderman';
    const props = { name: mockValue };
    const wrapper = shallow(<Result {...props} />);

    expect(wrapper.find('option').prop('value')).toEqual(mockValue);
  });
});
