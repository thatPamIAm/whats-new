import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

const result = { 
  id: 1,
  headline: 'Man dies after getting infection linked to shellfish, North Carolina officials say',
  img: 'https://www.newsobserver.com/entertainment/restaurants/o6w6n7/picture184859643/alternates/FREE_768/MAIN%20OPTION%202:%20OYSTERS',
  description: 'A North Carolina man has died after getting an infection often associated with shellfish, state health officials say.',
  url: 'https://www.bnd.com/news/nation-world/national/article235549897.html'
}

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
    expect(wrapper.state().filteredCurrent).toEqual([]);
  });

  it('should update the current news when updateNews is invoked', () => {
    const mockNews = 'technology';

    expect(wrapper.state().current).toBe(local);
    wrapper.instance().updateNews(mockNews);
    expect(wrapper.state().current).toBe(technology);
  });

  it('should reset the filteredContent when updateNews is invoked', () => {
    wrapper.setState({ filteredCurrent: result, current: health });
    const mockNews = 'technology';

    expect(wrapper.state().filteredCurrent).toEqual(result);
    expect(wrapper.state().current).toBe(health);
    wrapper.instance().updateNews(mockNews);
    expect(wrapper.state().current).toBe(technology);
    expect(wrapper.state().filteredCurrent).toEqual([]);
  });

  it('should update filtered content based on the query submitted', () => {
    wrapper.setState({ current: health });

    expect(wrapper.state().filteredCurrent).toEqual([]);

    wrapper.instance().filter('dies');

    expect(wrapper.state().filteredCurrent).toEqual([result]);
  });
});

