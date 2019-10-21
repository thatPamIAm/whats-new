import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import local from '../../data/local';

describe('App', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state of local news', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state().local).toBe(local);
  });
});

