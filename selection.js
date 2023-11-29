function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j
            }
        }
        if (smallest != i) {
            const temp = arr[smallest]
            arr[smallest] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

module.exports = selectionSort;