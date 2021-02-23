import { combineReducers } from 'redux';

//Constants
const UPDATE_ARRAY = 'UPDATE_ARRAY';
const SET_COLORS = 'SET_COLORS';
const SELECT_ITEMS = 'SELECT_ITEMS';


//Interface
export const updateArray = (newArray) => {
    return {
        type: UPDATE_ARRAY,
        newArray
    }
}
export const setColors = (colorArray) => {
    return {
        type: SET_COLORS,
        colorArray
    }
}
const defInterfaceState = {
    array: [],
    colors: []
}
const interfaceReducer = (state = defInterfaceState, action) => {
    switch (action.type) {
        case UPDATE_ARRAY:
            return {
                array: action.newArray,
                colors: state.colors
            };
        case SET_COLORS:
            return {
                array: state.array,
                colors: action.colorArray
            }
        default:
            return state;
    }
}

//Sorting
export const selectItems = (items) => {
    return {
        type: SELECT_ITEMS,
        items
    }
}
const defSortingState = [];
const sortingReducer = (state = defSortingState, action) => {
    switch (action.type) {
        case SELECT_ITEMS:
            return [];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    interface: interfaceReducer,
    selection: sortingReducer
});

export default rootReducer;