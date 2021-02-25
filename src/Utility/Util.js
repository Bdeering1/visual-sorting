export function generateArray(min, max, elements) {
    const array = [];
    for (let i = 0; i < elements; i++) {
        array.push(randFromInterval(min, max));
    }
    return array;
}

function randFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}