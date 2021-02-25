export const SET_COLORS = 'SET_COLORS';
export const UPDATE_ARRAY = 'UPDATE_ARRAY';
export const UPDATE_SELECTED = 'UPDATE_SELECTED';
export const SORTING_STARTED = 'SORTING_STARTED';
export const SORTING_STOPPED = 'SORTING_STOPPED';


export const setColors = (colorObject) => {
    return {
        type: SET_COLORS,
        colorObject
    }
}

export const updateArray = (newArray, newSize) => {
    return {
        type: UPDATE_ARRAY,
        newArray,
        newSize
    }
}
export const updateSelected = (newSelected) => {
    return {
        type: UPDATE_SELECTED,
        newSelected
    }
}

export const startedSorting = () => {
    return {
        type: SORTING_STARTED
    }
}
export const stoppedSorting = () => {
    return {
        type: SORTING_STOPPED
    }
}