import React from 'react';
import { shallow, mount } from 'enzyme';

import Menu from './Menu';

describe('Menu', () => {
  let wrapper;
  let mockUpdateNews

  beforeEach(() => {
    mockUpdateNews = jest.fn();
    wrapper = shallow(<Menu updateNews={mockUpdateNews} />);    
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleClick when a button is clicked', () => {
    wrapper = mount(<Menu updateNews={mockUpdateNews} />);    
    const spyClick = jest.spyOn(wrapper.instance(), 'handleClick');

    wrapper.instance().forceUpdate();
    wrapper.find('#local').simulate('click');

    expect(spyClick).toHaveBeenCalled();
  });

  it('should handle the click by passing the id to updateNews', () => {
    const mockEvent = { target: { id: 'entertainment'}}

    wrapper.instance().handleClick(mockEvent);

    expect(mockUpdateNews).toHaveBeenCalledWith(mockEvent.target.id);
  });
});