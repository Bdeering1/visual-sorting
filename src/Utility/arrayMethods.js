import store from '../State/store';
import { updateArray, updateSelected } from '../State/actions';
import { generateArray, swapInArray, swapSortedInArray, selectTwo, selectSorted, sleep } from './util';


const DEFAULT_ARRAY_SIZE = 16;
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
            setSelected(selectTwo(j, j + 1, currentSelection, 1));
            await sleep(10000 / (arraySize*arraySize));
            if (currentArray[j] > currentArray[j + 1]) {
                setArray(swapInArray(j, j + 1, currentArray));
                await sleep(10000 / (arraySize*arraySize));
            }
            setSelected(selectTwo(j, j + 1, currentSelection, 0));
        }
    }
}

export const mergeSortCaller = async () => {
    let currentArray = [...store.getState().sorting.array]; /* spread operator prevents mutation */
    let currentSelection = [...store.getState().interface.selected];

    setArray(await mergeSort(currentArray, currentSelection, currentArray, 0));
}

const mergeSort = async (unsortedArray, currentSelection, currentArray, start) => {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return await merge(
        await mergeSort(left, currentSelection, currentArray, start),
        await mergeSort(right, currentSelection, currentArray, start + middle),
        start,
        start + middle,
        currentSelection,
        currentArray
    );
}

const merge = async (left, right, start, middle, currentSelection, currentArray) => {
    let sorted = [];
    let leftIdx = 0, rightIdx = 0;

    while (leftIdx < left.length && rightIdx < right.length) {
        setSelected(selectTwo(start + leftIdx, middle + rightIdx, currentSelection, 1));
        await sleep(5000 / currentSelection.length);
        setSelected(selectTwo(start + leftIdx, middle + rightIdx, currentSelection, 0));

        if (left[leftIdx] < right[rightIdx]) {
            sorted.push(left[leftIdx]);
            leftIdx++;
        } else {
            sorted.push(right[rightIdx]);
            rightIdx++;
        }
    }
    
    sorted = sorted.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));

    setArray(swapSortedInArray(start, sorted, currentArray));
    setSelected(selectSorted(start, sorted.length, currentSelection, 1));
    await sleep(5000 / currentSelection.length);
    setSelected(selectSorted(start, sorted.length, currentSelection, 0));
    return sorted;
  }