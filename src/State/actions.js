import { resetArray, updateSize, bubbleSort } from '../Utility/arrayMethods';

export const SET_COLORS = 'SET_COLORS';
export const UPDATE_ARRAY = 'UPDATE_ARRAY';
export const UPDATE_SELECTED = 'UPDATE_SELECTED';
export const SORTING_STARTED = 'SORTING_STARTED';
export const SORTING_STOPPED = 'SORTING_STOPPED';


//Interface Actions
export const setColors = (colorObject) => {
    return {
        type: SET_COLORS,
        colorObject
    }
}
export const updateSelected = (newSelected) => {
    return {
        type: UPDATE_SELECTED,
        newSelected
    }
}

//Sorting Actions
export const updateArray = (newArray, newSize) => {
    return {
        type: UPDATE_ARRAY,
        newArray,
        newSize
    }
}
const startedSorting = () => {
    return {
        type: SORTING_STARTED
    }
}
const stoppedSorting = () => {
    return {
        type: SORTING_STOPPED
    }
}

//Composite Actions
const callResetArray = () => {
    return (dispatch, getState) => {
        if (getState().sorting.isSorting) return;
        resetArray();
    }
}
const callUpdateSize = () => {
    return (dispatch, getState) => {
        if (getState().sorting.isSorting) return;
        updateSize();
    }
}

//Asynchronous Actions
const startBubbleSort = () => {
    return async (dispatch, getState) => {
        if (getState().sorting.isSorting) return;
        dispatch(startedSorting());
        await bubbleSort();
        dispatch(stoppedSorting());
    }
}

export const actions = {
    resetArray: callResetArray,
    updateArray: callUpdateSize,
    bubbleSort: startBubbleSort
}