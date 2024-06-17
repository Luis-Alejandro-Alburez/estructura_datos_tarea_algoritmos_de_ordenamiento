function generarNumerosAleatorios() {
    const numerosAleatorios = [];
    for (let i = 0; i < 10000; i++) {
        const numero = Math.floor(Math.random() * 10001); // Genera un número aleatorio entre 0 y 10000
        numerosAleatorios.push(numero);
    }
    return numerosAleatorios;
}

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

function insertionSort(arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

function measureTime(fn, arr) {
    const start = performance.now();
    fn(arr);
    const end = performance.now();
    return end - start;
}

const arrayNumeros = generarNumerosAleatorios();
const array1 = [...arrayNumeros];
const array2 = [...arrayNumeros];
const array3 = [...arrayNumeros];
const array4 = [...arrayNumeros];
const array5 = [...arrayNumeros];

console.log("Bubble Sort: " + measureTime(bubbleSort, array1) + " ms");
console.log("Selection Sort: " + measureTime(selectionSort, array2) + " ms");
console.log("Insertion Sort: " + measureTime(insertionSort, array3) + " ms");
console.log("Merge Sort: " + measureTime(mergeSort, array4) + " ms");
console.log("Quick Sort: " + measureTime(quickSort, array5) + " ms");
console.log("")
console.log("Quick Sort es el método más rápido de todos");