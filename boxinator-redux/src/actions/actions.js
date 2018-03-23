import * as types from '../actions/actionTypes'; 
import ItemApi from '../api/ItemApi';

export function fetchItemsSuccess(items){    
    return {
        type: types.LOAD_ITEMS_SUCCESS,
        items
    }
}

export function createItemSuccess(items){
    return {
        type: types.ADD_ITEM_SUCCESS,
        items
    }
}

/**
 * Fetch all data from api and dispatch it
 */
export function fetchItems() {  
    return dispatch => {
      return ItemApi.getAllItems().then(data => {
        dispatch(fetchItemsSuccess(data));
      }).catch(error => {
        throw(error);
      });
    };
  }

/**
 * Send POST request to create new box
 */
export function createItem(item) {  
  return dispatch => {
    return ItemApi.createItem(item).then(response => {   
      dispatch(createItemSuccess(response));
      return response
    }).catch(error => {
      throw(error);
    });
  };
}
