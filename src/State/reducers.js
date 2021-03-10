import { combineReducers } from 'redux';
import { SET_COLORS, UPDATE_SELECTED, SLOW_TRANSITION, FAST_TRANSITION, END_TRANSITION, UPDATE_ARRAY, UPDATE_MAX_SIZE, SORTING_STARTED, SORTING_STOPPED } from './actions';


//Interface
const defInterfaceState = {
    colors: {},
    selected: [],
    transition: 0
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
        case FAST_TRANSITION:
            return {
                ...state,
                transition: 1
            }
        case SLOW_TRANSITION:
            return {
                ...state,
                transition: 2
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

/* a composed reducer isn't required for the complexity of this project, but I wanted to include one to get practice and demonstrate my Redux knowledge */
const rootReducer = combineReducers({
    interface: interfaceReducer,
    sorting: sortingReducer
});

export default rootReducer;