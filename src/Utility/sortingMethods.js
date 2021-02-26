import store from '../State/store';
import { updateArray, updateSelected, startedSorting, stoppedSorting } from '../State/actions';
import { generateArray, sleep } from './util';


const DEFAULT_ARRAY_SIZE = 20;
const getArraySize = () => {
    return store.getState().sorting.arraySize || DEFAULT_ARRAY_SIZE;
}
const setArray = (newArray) => store.dispatch(updateArray(newArray, newArray.length));
const setSelected = (newSelected) => store.dispatch(updateSelected(newSelected));


export const resetArray = () => {
    if (store.getState().sorting.isSorting) return;
    setArray(generateArray(10, 900, getArraySize()));
    setSelected(generateArray(0, 0, getArraySize()));
}

export const updateSize = (newSize) => {
    if (store.getState().sorting.isSorting) return;
    setArray(generateArray(10, 900, newSize));
    setSelected(generateArray(0, 0, newSize));
}

export const bubbleSort = async () => {
    if (store.getState().sorting.isSorting) return;
    store.dispatch(startedSorting());
    let arraySize = getArraySize();
    let currentArray = [...store.getState().sorting.array]; /* spread operator prevents mutation */
    let currentSelection = [...store.getState().sorting.selected];
    for (let i = 0; i < arraySize - 1; i++) {
        for (let j = 0; j < arraySize-i-1; j++) {
            currentSelection[j] = 1;
            currentSelection[j + 1] = 1;
            setSelected([...currentSelection]);
            await sleep(10000 / (arraySize*arraySize));
            if (currentArray[j] > currentArray[j + 1]) {
                let temp = currentArray[j];
                currentArray[j] = currentArray[j + 1];
                currentArray[j + 1] = temp;
                setArray([...currentArray]);
            }
            await sleep(10000 / (arraySize*arraySize));
            currentSelection[j] = 0;
            currentSelection[j + 1] = 0;
        }
    }
    setSelected([...currentSelection]);
    store.dispatch(stoppedSorting());
}