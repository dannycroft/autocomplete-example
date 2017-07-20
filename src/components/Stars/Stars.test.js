import React from 'react';
import { shallow } from 'enzyme';

import Stars from './index';

describe('Stars', () => {
  it('renders without crashing', () => {
    shallow(<Stars />);
  });

  it('contains a valid canvas element', () => {
    const wrapper = shallow(<Stars />);
    const canvas = wrapper.find('canvas');

    expect(canvas.length).toEqual(1);
    expect(canvas.prop('className')).toBe('stars');
  });
});
