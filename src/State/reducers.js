import { combineReducers } from 'redux';
import { SET_COLORS, UPDATE_SELECTED, START_INIT, END_INIT, START_TRANSITION, END_TRANSITION, UPDATE_ARRAY, UPDATE_MAX_SIZE, SORTING_STARTED, SORTING_STOPPED } from './actions';


//Interface
const defInterfaceState = {
    colors: {},
    selected: [],
    transition: false,
    initialized: 0
}
const interfaceReducer = (state = defInterfaceState, action) => {
    switch (action.type) {
        case SET_COLORS:
            return {
                ...state,
                colors: action.colorObject
            }
        case UPDATE_SELECTED:
            return {
                ...state,
                selected: action.newSelected
            }
        case START_INIT:
            return {
                ...state,
                initialized: 1
            }
        case END_INIT:
                return {
                    ...state,
                    initialized: 2
                }
        case START_TRANSITION:
            return {
                ...state,
                transition: true
            }
        case END_TRANSITION:
            return {
                ...state,
                transition: 0
            }
        default:
            return state;
    }
}

//Sorting
const defSortingState = {
    array: [],
    arraySize: 0,
    minSize: 4,
    maxSize: 48,
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
        case UPDATE_MAX_SIZE:
            return {
                ...state,
                maxSize: action.newMax
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

const rootReducer = combineReducers({
    interface: interfaceReducer,
    sorting: sortingReducer
});

export default rootReducer;