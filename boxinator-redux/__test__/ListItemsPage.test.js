import React from 'react';
import { ListItemsPage } from '../src/components/views/ListItemsPage';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { boxCollections } from './collections'

describe('<ListItemsPage /> should render box items', () => {

  // beforeEach(()=>{  })

  it('Get notified if no boxes exists', () => {
    const wrapper = render(<ListItemsPage items={ [] }/>);
    expect(wrapper.find('p').text()).toEqual('There are no boxes in collection.');
    
  });

  it('Should render a table including it´s data and content', () => {
    const wrapper = render(<ListItemsPage items={ boxCollections }/>); 
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });

});