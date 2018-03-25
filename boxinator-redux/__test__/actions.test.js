import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/actions/actions'
import * as types from '../src/actions/actionTypes'
import * as API from '../src/constants'; 
import fetchMock from 'fetch-mock'
import { boxCollections } from './collections'

const TestData = {
  "name": "Bradley",
  "color": "rgb(78,40,24)",
  "country": "China",
  "weight": "8.00"
}

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
 
describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
 
  it('fetch from API and desolve LOAD_ITEMS_SUCCESS when fetching items succeeded', () => {
    fetchMock
      .getOnce(API.GET_ITEMS_URL, { body: { items: boxCollections }, headers: { 'content-type': 'application/json' } })
 
    const expectedActions = [
      {"items": {"items": boxCollections}, "type": types.LOAD_ITEMS_SUCCESS}
    ]
    const store = mockStore({ items: [] })
 
    return store.dispatch(actions.fetchItems()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('POST to API and desolve ADD_ITEM_SUCCESS when items successfully created', () => {
    fetchMock
      .postOnce(API.POST_ITEM_URL, { body: TestData, headers: { 'content-type': 'application/json' } })
 
    const expectedActions = [
      {"items": TestData, "type": types.ADD_ITEM_SUCCESS}
    ]
    const store = mockStore({ items: [] })
 
    return store.dispatch(actions.createItem()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

})