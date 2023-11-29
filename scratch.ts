function bubbleSort(arr: number[]): number[] {
    let count: number = 0
    let hasSwapped: boolean = false
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            count ++
            if (arr[j] > arr[j+1]) {
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                hasSwapped = true
            }
        }
        if (!hasSwapped) break
    }
    console.log(`Total loops: ${count}`)
    return arr
}

let nums = [6, 7, 23, 45, 1, 19, 63, 13, 58, 26, 34]
nums = bubbleSort(nums)
// nums.forEach(n => console.log(n))

function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let j = i

        while (j > 0 && arr[j] < arr[j-1]) {
            const temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp
            j--
        }
    }
    
    return arr
}

nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32]
nums = insertionSort(nums)
nums.forEach(n => console.log(n))
