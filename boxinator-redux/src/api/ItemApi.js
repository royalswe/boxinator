/**
 * All API requests to backend
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
      console.log(data);
      const request = new Request('http://localhost:8000/api/item', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify(data)
      });
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
}
  
export default ItemApi;