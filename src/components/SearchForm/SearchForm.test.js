import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from './SearchForm';


describe('Search Form', () => {
  let wrapper;
  let mockFilter = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchForm filter={mockFilter}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state().value).toBe('');
  });

  it('should update state when handleChange is invoked', () => {
    const mockEvent = { target: { value: 'testing' } };

    expect(wrapper.state().value).toBe('');
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state().value).toBe('testing');
  });

  it('should call the filter function and reset function when the search button is clicked', () => {
    const mockEvent = { preventDefault: function() {} };
    const spy = jest.spyOn(wrapper.instance(), 'reset');
    wrapper.setState({ value: 'My value' });
    
    wrapper.instance().handleClick(mockEvent);

    expect(mockFilter).toHaveBeenCalledWith('My value');
    expect(spy).toHaveBeenCalled();
  });

  it('should reset state when the reset function is invoked', () => {
    wrapper.setState({ value: 'Testing' });

    expect(wrapper.state().value).toBe('Testing');
    wrapper.instance().reset();
    expect(wrapper.state().value).toBe('');
  });
});