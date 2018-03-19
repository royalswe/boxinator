import React from 'react';
import AddBoxPageRedux from '../src/components/views/AddBoxPage';
import { AddBoxPage } from '../src/components/views/AddBoxPage';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<ListItemsPage /> should render box items', () => {
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

    
    it('render the form in <AddBoxPage />', () => {
        const wrapper = shallow(<AddBoxPage />);
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });

    it('passes dispatch and getState to addBoxPage component', () => {
        const { store, invoke } = create()
        invoke((dispatch, getState) => {
          dispatch('ADD_ITEM_SUCCESS')
          getState();
        })

        const wrapper = shallow(<AddBoxPageRedux store={store} />);
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    });
});