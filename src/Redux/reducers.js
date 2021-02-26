import { combineReducers } from 'redux';
import { SET_COLORS, UPDATE_ARRAY, UPDATE_SELECTED, SORTING_STARTED, SORTING_STOPPED } from './actions';


//Interface
const defInterfaceState = {
    colors: {}
}
const interfaceReducer = (state = defInterfaceState, action) => {
    switch (action.type) {
        case SET_COLORS:
            return {
                colors: action.colorObject
            }
        default:
            return state;
    }
}

//Sorting
const defSortingState = {
    array: [],
    selected: [],
    arraySize: 0,
    isSorting: false
}
const sortingReducer = (state = defSortingState, action) => {
    switch (action.type) {
        case UPDATE_ARRAY:
            return {
                ...state,
                array: action.newArray,
                arraySize: action.newSize
            }
        case UPDATE_SELECTED:
            return {
                ...state,
                selected: action.newSelected
            }
        case SORTING_STARTED:
            return {
                ...state,
                isSorting: true
            }
        case SORTING_STOPPED:
            return {
                ...state,
                isSorting: false
            }
        default:
            return state;
    }
}

/* a composed reducer isn't required for the complexity of this project, but I wanted to include one to get practice and demonstrate my Redux knowledge */
const rootReducer = combineReducers({
    interface: interfaceReducer,
    sorting: sortingReducer
});

export default rootReducer;