import { resetArray, updateSize, sizeTooLarge, bubbleSort, mergeSortCaller } from '../Utility/arrayMethods';

export const SET_COLORS = 'SET_COLORS';
export const UPDATE_ARRAY = 'UPDATE_ARRAY';
export const UPDATE_MAX_SIZE = 'UPDATE_MAX_SIZE';
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
const updateMax = (newMax) => {
    return {
        type: UPDATE_MAX_SIZE,
        newMax
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

//Redux Thunk Actions
const callResetArray = () => {
    return (dispatch, getState) => {
        if (getState().sorting.isSorting) return;
        resetArray();
    }
}
const callUpdateSize = (newSize) => {
    return (dispatch, getState) => {
        if (getState().sorting.isSorting) return;
        updateSize(newSize);
    }
}
const updateMaxSize = (newMax) => {
    return (dispatch) => {
        dispatch(updateMax(newMax));
        if (sizeTooLarge())
            updateSize(newMax);
    }
}
const startBubbleSort = () => {
    return async (dispatch, getState) => {
        if (getState().sorting.isSorting) return;
        dispatch(startedSorting());
        await bubbleSort();
        dispatch(stoppedSorting());
    }
}
const startMergeSort = () => {
    return async (dispatch, getState) => {
        if (getState().sorting.isSorting) return;
        dispatch(startedSorting());
        await mergeSortCaller();
        dispatch(stoppedSorting());
    }
}

export const thunkActions = {
    resetArray: callResetArray,
    updateSize: callUpdateSize,
    updateMax: updateMaxSize,
    bubbleSort: startBubbleSort,
    mergeSort: startMergeSort
}