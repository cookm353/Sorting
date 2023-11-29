class Sort {
    static bubble(arr) {
        let count = 0;
        let hasSwapped = false;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i; j++) {
                count++;
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    hasSwapped = true;
                }
            }
            if (!hasSwapped)
                break;
        }
        console.log(`Total loops: ${count}`);
        return arr;
    }
    static insertion(arr) {
        for (let i = 1; i < arr.length; i++) {
            let j = i;
            while (j > 0 && arr[j] < arr[j - 1]) {
                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
                j--;
            }
        }
        return arr;
    }
    static selection(arr) {
        for (let i = 0; i < arr.length; i++) {
            let smallest = i;
            for (let j = i; j < arr.length; j++) {
                if (arr[j] < arr[smallest])
                    smallest = j;
            }
            if (smallest != i) {
                const temp = arr[smallest];
                arr[smallest] = arr[i];
                arr[i] = temp;
            }
        }
        return arr;
    }
    static merge(arr) {
        if (arr.length <= 1)
            return arr;
        const mid = Math.floor(arr.length - 1 / 2);
        const left = Sort.merge(arr.slice(0, mid));
        const right = Sort.merge(arr.slice(mid));
        return this.mergeHelper(left, right);
    }
    static mergeHelper(arr1, arr2) {
        const result = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i]);
                i++;
            }
            else {
                result.push(arr2[j]);
                j++;
            }
        }
        while (i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            result.push(arr2[j]);
            j++;
        }
        return result;
    }
}
let nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32];
console.log(Sort.bubble(nums));
console.log(Sort.insertion(nums));
console.log(Sort.selection(nums));
console.log(Sort.merge(nums));
