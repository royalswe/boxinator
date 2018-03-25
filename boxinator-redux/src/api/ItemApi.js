/**
 * All API requests is located here
 */
import * as API from '../constants'; 

class ItemApi { 

  static getAllItems() {    
    return fetch(API.GET_ITEMS_URL).then(response => {   
      return response.json();
    }).catch(error => {
      throw error;
    });
  }

  static createItem(data) {
    return fetch(API.POST_ITEM_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if(response.ok){
        return response.json()
      }
      throw new Error('Whoops! something unexpected happened');
    }).catch(error => {
      throw(error);
    });
  }

}
  
export default ItemApi;