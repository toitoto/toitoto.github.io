const lista1 = [9, 2, 3, 9, 2, 3, 4, 2, 9, 2, 9];
const lista1Count = {};
lista1.map(
    function(elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);
const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);
const moda = lista1Array[lista1Array.length - 1];
console.log(moda); //5

const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length -
        arr.filter(v => v === b).length
    ).pop();
}
console.log(mode(NUMBERS)); //5
console.log(mode(lista1)); //9