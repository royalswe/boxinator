import reducer from '../src/reducers/rootReducer'
import * as types from '../src/actions/actionTypes'
import { boxCollections } from './collections'
 
describe('items reducer', () => {
    
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
        {"items": []}
    )
  })
 
  it('should handle ADD_ITEM_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.ADD_ITEM_SUCCESS,
        items: {name: "Ragnar", country: "Sweden", weight: 22.50, color: "rgb(255, 0, 0)"}
      })
    ).toEqual(
      {
        "items": [{name: "Ragnar", country: "Sweden", weight: 22.50, color: "rgb(255, 0, 0)"}]
      }
    )

    expect(
        reducer([], {
          type: types.ADD_ITEM_SUCCESS,
          items: {name: "Floki", country: "China", weight: 13.30, color: "rgb(255, 255, 0)"}
        })
      ).toEqual(
        {
          "items": [{name: "Floki", country: "China", weight: 13.30, color: "rgb(255, 255, 0)"}]
        }
      )
  })

  it('should handle LOAD_ITEMS_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.LOAD_ITEMS_SUCCESS,
        items: boxCollections
      })
    ).toEqual(
      {
        "items": boxCollections
      }
    )
  })

  it('default statement should return the state', () => {
    expect(
      reducer([], {
        type: "DEFAULT",
        items: {state: "Just bring me the current state"}
      })
    ).toEqual(
      {
        items: []
      }
    )
  })

})