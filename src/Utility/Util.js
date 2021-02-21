export function generateArray(min, max) {
    const array = [];
    for (let i = 0; i < 300; i++) {
        array.push(randFromInterval(min, max));
    }
    return array;
}

export function randFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}