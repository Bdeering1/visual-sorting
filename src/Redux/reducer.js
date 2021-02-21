import { combineReducers } from 'redux';

//Constants
const UPDATE_ARRAY = 'UPDATE_ARRAY';
const SELECT_ITEMS = 'SELECT_ITEMS';

//Actions Creators
export const updateArray = (newArray) => {
    return {
        type: UPDATE_ARRAY,
        newArray
    }
}
export const selectItems = (items) => {
    return {
        type: SELECT_ITEMS,
        items
    }
}

//Reducers
const arrayReducer = (state = [], action) => {
    switch (action.type) {
        case UPDATE_ARRAY:
            return action.newArray;
        default:
            return state;
    }
}
const selectionReducer = (state = [], action) => {
    switch (action.type) {
        case SELECT_ITEMS:
            return [];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    array: arrayReducer,
    selection: selectionReducer
});

export default rootReducer;