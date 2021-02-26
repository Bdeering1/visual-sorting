export const generateArray = (min, max, elements) => {
    const array = [];
    for (let i = 0; i < elements; i++) {
        array.push(randFromInterval(min, max));
    }
    return array;
}

export const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


const randFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}