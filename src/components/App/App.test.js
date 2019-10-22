import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    expect(wrapper.state().local).toBe(local);
    expect(wrapper.state().entertainment).toBe(entertainment);
    expect(wrapper.state().health).toBe(health);
    expect(wrapper.state().science).toBe(science);
    expect(wrapper.state().technology).toBe(technology);
    expect(wrapper.state().current).toBe(local);
  });

  it('should update the current news when updateNews is invoked', () => {
    const mockNews = 'technology';

    expect(wrapper.state().current).toBe(local);
    wrapper.instance().updateNews(mockNews);
    expect(wrapper.state().current).toBe(technology);
  });
});

