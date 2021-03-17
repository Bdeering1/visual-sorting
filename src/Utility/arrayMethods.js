import store from '../State/store';
import { updateArray, updateSelected } from '../State/actions';
import { generateArray, swapInArray, swapSortedInArray, setTwo, selectArea, sleep } from './util';


const DEFAULT_ARRAY_SIZE = 32;
const getArraySize = () => {
    return store.getState().sorting.arraySize || DEFAULT_ARRAY_SIZE;
}
const setArray = (newArray) => store.dispatch(updateArray(newArray, newArray.length));
const setSelected = (newSelected) => store.dispatch(updateSelected(newSelected));


export const initArray = async (animTime) => {
    setArray(generateArray(0, 0, getArraySize()));
    setSelected(generateArray(0, 0, getArraySize()));
    await sleep(animTime); /* waiting for title to animate */
}

export const resetArray = async (animTime) => {
    setArray(generateArray(0, 875, getArraySize()));
    await sleep(animTime); /* waiting for animation to finish */
}

export const updateSize = (newSize) => {
    setArray(generateArray(10, 900, newSize));
    setSelected(generateArray(0, 0, newSize));
}

export const sizeTooLarge = () => {
    return (store.getState().sorting.maxSize < store.getState().sorting.arraySize);
}


/* BUBBLE SORT */
export const bubbleSort = async () => {
    let arraySize = getArraySize();
    let currentArray = [...store.getState().sorting.array]; /* spread operator prevents mutation */
    let currentSelection = [...store.getState().interface.selected];

    for (let i = 0; i < arraySize - 1; i++) {
        for (let j = 0; j < arraySize-i-1; j++) {
            setSelected(setTwo(j, j + 1, 1, currentSelection));
            await sleep(10000 / (arraySize*arraySize));
            if (currentArray[j] > currentArray[j + 1]) {
                setArray(swapInArray(j, j + 1, currentArray));
                await sleep(10000 / (arraySize*arraySize));
            }
            setSelected(setTwo(j, j + 1, 0, currentSelection));
        }
    }
}


/* MERGE SORT */
export const mergeSortCaller = async () => {
    let currentArray = [...store.getState().sorting.array]; /* spread operator prevents mutation */
    let currentSelection = [...store.getState().interface.selected];

    setArray(await mergeSort(currentArray, currentSelection, currentArray, 0));
}

const mergeSort = async (unsortedArray, selection, fullArray, start) => {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return await merge( /* extra arguments are used to update state array during sorting */
        await mergeSort(left, selection, fullArray, start),
        await mergeSort(right, selection, fullArray, start + middle),
        start,
        start + middle,
        selection,
        fullArray
    );
}

const merge = async (leftArr, rightArr, start, middle, selection, fullArray) => {
    let sorted = [];
    let leftIdx = 0, rightIdx = 0;

    while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
        setSelected(setTwo(start + leftIdx, middle + rightIdx, 1, selection));
        await sleep(10000 / (selection.length * Math.log(selection.length)));
        setSelected(setTwo(start + leftIdx, middle + rightIdx, 0, selection));

        if (leftArr[leftIdx] < rightArr[rightIdx]) {
            sorted.push(leftArr[leftIdx]);
            leftIdx++;
        } else {
            sorted.push(rightArr[rightIdx]);
            rightIdx++;
        }
    }

    sorted = sorted.concat(leftArr.slice(leftIdx)).concat(rightArr.slice(rightIdx));

    setArray(swapSortedInArray(start, sorted, fullArray));
    setSelected(selectArea(start, sorted.length, 1, selection));
    await sleep(10000 / selection.length);
    setSelected(selectArea(start, sorted.length, 0, selection));
    return sorted;
}


/* QUICK SORT */
export const quickSortCaller = async () => {
    let currentArray = [...store.getState().sorting.array]; /* spread operator prevents mutation */
    let currentSelection = [...store.getState().interface.selected];

    setArray(await quickSort(currentArray, 0, currentArray.length - 1, currentSelection));
}

export const quickSort = async (array, low, high, selection) => {
    if (low < high) {
        let pivotIdx = await partition(array, low, high, selection);
        await quickSort(array, low, pivotIdx, selection);
        await quickSort(array, pivotIdx + 1, high, selection);
    }
    return array;
}

const partition = async (array, low, high, selection) => {
    let pivotIdx = Math.floor((low + high) / 2);
    setSelected(selectArea(pivotIdx, 1, 1, selection));
    await sleep(10000 / (selection.length * Math.log(selection.length)));
    let pivot = array[pivotIdx];
    let i = low - 1, j = high + 1;
    while (true) {
        do {
            i++;
        } while (array[i] < pivot);
        do {
            j--;
        } while (array[j] > pivot);
        if (i >= j) {
            setSelected(selectArea(pivotIdx, 1, 0, selection));
            return j;
        }
        setSelected(setTwo(i, j, 1, selection));
        await sleep(10000 / (selection.length * Math.log(selection.length)));
        swapInArray(i, j, array);
        setArray([...array]);
        await sleep(10000 / (selection.length * Math.log(selection.length)));
        setSelected(setTwo(i, j, 0, selection));
    }
}