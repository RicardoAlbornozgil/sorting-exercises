function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
                noSwaps = false;
            }
        }
        if (noSwaps) break; // If no swaps were made, the array is sorted
    }
    return arr;
}

module.exports = bubbleSort;
