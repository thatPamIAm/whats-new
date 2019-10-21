import React from 'react';
import { shallow } from 'enzyme';

import NewsArticle from './NewsArticle';
import local from '../../data/local';

const article = {
  description: "A motorcyclist was killed in a crash near East 17th Avenue and Park Avenue in Denver early Friday morning.",
  headline: "Motorcyclist killed in crash near Capitol Hill in Denver",
  id: 5,
  img: "https://localtvkdvr.files.wordpress.com/2019/09/fatal-motorcycle.jpeg?quality=85&strip=all&w=800&h=450&crop=1",
  url: "https://kdvr.com/2019/09/27/motorcyclist-killed-in-crash-near-capitol-hill-in-denver/"
}

describe('NewsArticle', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsArticle article={article} key={article.id}/>);

    expect(wrapper).toMatchSnapshot();
  });

});