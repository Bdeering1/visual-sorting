import { generateArray } from './util';


const ARRAY_ITEMS = 130;

export const resetArray = (updateArray, updateSelected) => {
    updateArray(generateArray(10, 900, ARRAY_ITEMS));
    updateSelected(generateArray(0, 0, ARRAY_ITEMS));
}