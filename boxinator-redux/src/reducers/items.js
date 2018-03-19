import * as types from '../actions/actionTypes'; 

export default function items(state = [], action = {}){
        
    switch(action.type){
        case types.LOAD_ITEMS_SUCCESS:
            return action.items;
        case types.ADD_ITEM_SUCCESS:
            return [...state,action.items]; // previous items + newly created item
        default: 
            return state;
    }
}