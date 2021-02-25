import { combineReducers } from 'redux';
import { SET_COLORS, UPDATE_ARRAY, UPDATE_SELECTED } from './actions';


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
    selected: []
}
const sortingReducer = (state = defSortingState, action) => {
    switch (action.type) {
        case UPDATE_ARRAY:
            return {
                array: action.newArray,
                selected: state.selected,
            };
        case UPDATE_SELECTED:
            return {
                array: state.array,
                selected: action.items
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