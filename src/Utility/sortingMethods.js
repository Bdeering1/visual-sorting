import store from '../Redux/store';
import { updateArray, updateSelected, startedSorting, stoppedSorting } from '../Redux/actions';
import { generateArray } from './util';


const ARRAY_SIZE = 5;
const setArray = (newArray) => store.dispatch(updateArray(newArray, ARRAY_SIZE));
const setSelected = (newSelected) => store.dispatch(updateSelected(newSelected));


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


export const resetArray = () => {
    setArray(generateArray(10, 900, ARRAY_SIZE));
    setSelected(generateArray(0, 0, ARRAY_SIZE));
}

export const bubbleSort = async () => {
    store.dispatch(startedSorting());
    let currentArray = [...store.getState().sorting.array];
    let currentSelection = [...store.getState().sorting.selected];
    for (let i = 0; i < ARRAY_SIZE - 1; i++) {
        for (let j = 0; j < ARRAY_SIZE-i-1; j++) {
            currentSelection[j] = 1;
            currentSelection[j + 1] = 1;
            setSelected([...currentSelection]);
            await sleep(200);
            if (currentArray[j] > currentArray[j + 1]) {
                let temp = currentArray[j];
                currentArray[j] = currentArray[j + 1];
                currentArray[j + 1] = temp;
                setArray([...currentArray]);
                console.log(store.getState().sorting.array);
            }
            await sleep(200);
            currentSelection[j] = 0;
            currentSelection[j + 1] = 0;
        }
    }
    setSelected([...currentSelection]);
    store.dispatch(stoppedSorting());
}