function bubbleSort(arr) {
    let hasSwapped = false
    for (let i = 0; i < arr.length; i ++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                hasSwapped = true
            }
        }
        if (!hasSwapped) break
    }
    return arr
}

module.exports = bubbleSort;