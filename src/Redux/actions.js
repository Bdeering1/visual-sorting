export const SET_COLORS = 'SET_COLORS';
export const UPDATE_ARRAY = 'UPDATE_ARRAY';
export const UPDATE_SELECTED = 'UPDATE_SELECTED';


export const setColors = (colorObject) => {
    return {
        type: SET_COLORS,
        colorObject
    }
}

export const updateArray = (newArray) => {
    return {
        type: UPDATE_ARRAY,
        newArray
    }
}
export const updateSelected = (newSelection) => {
    return {
        type: UPDATE_SELECTED,
        newSelection
    }
}