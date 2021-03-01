import store from '../State/store';
import { updateArray, updateSelected } from '../State/actions';
import { generateArray, swapInArray, setTwo, sleep } from './util';


const DEFAULT_ARRAY_SIZE = 20;
const getArraySize = () => {
    return store.getState().sorting.arraySize || DEFAULT_ARRAY_SIZE;
}
const setArray = (newArray) => store.dispatch(updateArray(newArray, newArray.length));
const setSelected = (newSelected) => store.dispatch(updateSelected(newSelected));


export const resetArray = () => {
    setArray(generateArray(10, 900, getArraySize()));
    setSelected(generateArray(0, 0, getArraySize()));
}

export const updateSize = (newSize) => {
    setArray(generateArray(10, 900, newSize));
    setSelected(generateArray(0, 0, newSize));
}

export const bubbleSort = async () => {
    let arraySize = getArraySize();
    let currentArray = [...store.getState().sorting.array]; /* spread operator prevents mutation */
    let currentSelection = [...store.getState().interface.selected];
    for (let i = 0; i < arraySize - 1; i++) {
        for (let j = 0; j < arraySize-i-1; j++) {
            setSelected(setTwo(j, j + 1, currentSelection, 1));
            await sleep(10000 / (arraySize*arraySize));
            if (currentArray[j] > currentArray[j + 1]) {
                setArray(swapInArray(j, j + 1, currentArray));
            }
            await sleep(10000 / (arraySize*arraySize));
            setTwo(j, j + 1, currentSelection, 0);
        }
    }
    setSelected([...currentSelection]);
}