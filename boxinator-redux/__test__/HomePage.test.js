import React from 'react';
import HomePage from '../src/components/views/HomePage';
import { ListItemsPage } from '../src/components/views/ListItemsPage';
import { shallow, mount, render } from 'enzyme';

describe('Home page tests', () => {

  it('should render welcome text', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('h2').text()).toEqual('Welcome to Boxinator!');
  });

});