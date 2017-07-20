import React from 'react';
import sinon from 'sinon';
import { shallow, render } from 'enzyme';

import Input from './Input';

describe('AutoCompleteInput', () => {
  it('renders without crashing', () => {
    shallow(<Input />);
  });

  it('contains the correct components', () => {
    const wrapper = render(<Input />);

    expect(wrapper.find('.autocomplete__label').length).toEqual(1);
    expect(wrapper.find('.autocomplete__input').length).toEqual(1);
  });

  it('triggers queryUpdated with correct query', () => {
    const mockEvent = { target: { value: 'Batman' } };
    const props = { queryUpdated: sinon.spy() };
    const wrapper = shallow(<Input {...props} />);

    wrapper.find('input').simulate('change', mockEvent);
    expect(props.queryUpdated.called).toEqual(true);
    expect(props.queryUpdated.calledWith(mockEvent)).toEqual(true);
  });
});
