/**
 * All API requests is located here
 * TODO:: remove hard coded url
 */

class ItemApi { 

  static getAllItems() {
    return fetch('http://localhost:8000/api/items').then(response => {   
      return response.json();
    }).catch(error => {
      throw error;
    });
  }

  static createItem(data) {
    return fetch('http://localhost:8000/api/item', {
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