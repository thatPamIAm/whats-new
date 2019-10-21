import React from 'react';
import { shallow } from 'enzyme';

import NewsContainer from './NewsContainer/';
import local from '../../data/local';

describe('NewsContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsContainer articles={local} />);

    expect(wrapper).toMatchSnapshot();
  });
});

