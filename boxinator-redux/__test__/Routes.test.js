import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter, Link, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router'
import renderer from 'react-test-renderer';
import Routes from '../src/Routes';
import toJson from 'enzyme-to-json';
import NotFoundPage from '../src/components/views/NotFoundPage';
import AddBoxPage from '../src/components/views/AddBoxPage';
import HomePage from '../src/components/views/HomePage';
import { Provider } from "react-redux";

/**
* middleware function. This is a mockup for the redux-thunk.
*/
const thunk = ({ dispatch, getState }) => next => action => {
if (typeof action === 'function') {
    return action(dispatch, getState)
}
    return next(action)
}
/**
 * fake the redux methods getState, dispatch, and next
 */
const create = () => {
const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn()
};
    const next = jest.fn()
    const invoke = (action) => thunk(store)(next)(action)
    return {store, next, invoke}
};


test('should render the navigation links', () => {
    const wrapper = shallow(<Routes />); 
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
});

test('should render the HomePage component when visiting start page', () => {
    const component = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0} >
        <Routes />
        </MemoryRouter>
    )
    expect(component.find(HomePage).length).toBe(1);
});

test('should render the NotFoundPage component when visiting non existing page', () => {
    const component = mount(
        <MemoryRouter initialEntries={['/dont-exist']} initialIndex={0} >
        <Routes />
        </MemoryRouter>
    )
    expect(component.find(NotFoundPage).length).toBe(1);
    expect(component.find(HomePage).length).toBe(0);
});


test('should render the AddBoxPage component when visiting /addbox', () => {
    /**
     * create fake store to be able to generate page
     */
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch('LOAD_ITEM_SUCCESS')
      getState();
    })

    const component = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/addbox']} initialIndex={0} >
                <Routes />
            </MemoryRouter>
        </Provider>
    )

    expect(component.find(NotFoundPage).length).toBe(0);
    expect(component.find(HomePage).length).toBe(0);
    expect(component.find(AddBoxPage).length).toBe(1);
});
