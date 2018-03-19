import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/actions/actions'
import * as types from '../src/actions/actionTypes'
import fetchMock from 'fetch-mock'
import { boxCollections } from './collections'
 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
 
describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
 
  it('fetch from API and desolve LOAD_ITEMS_SUCCESS when fetching items succeeded', () => {
    fetchMock
      .getOnce('http://localhost:8000/api/items', { body: { items: boxCollections }, headers: { 'content-type': 'application/json' } })
 
    const expectedActions = [
      {"items": {"items": boxCollections}, "type": types.LOAD_ITEMS_SUCCESS}
    ]
    const store = mockStore({ items: [] })
 
    return store.dispatch(actions.fetchItems()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

})