package main

import "fmt"

func bubbleSort(arr []int) []int {
	var hasSwapped bool

	for i, _ := range arr {
		hasSwapped = false
		for j := 0; j < len(arr)-i-1; j++ {
			if arr[j] > arr[j+1] {
				temp := arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
				hasSwapped = true
			}
		}
		if !hasSwapped {
			break
		}
	}
	return arr
}

func insertionSort(arr []int) []int {
	for i := 1; i < len(arr); i++ {
		j := i
		for j > 0 && arr[j] < arr[j-1] {
			temp := arr[j]
			arr[j] = arr[j-1]
			arr[j-1] = temp
			j--
		}
	}
	return arr
}

func main() {
	fmt.Println("Hello world!")
	arr := []int{4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
		23, 2, 453, 546, 75, 67, 4342, 32}

	// arr = insertionSort(arr)
	// fmt.Println(arr)

	fmt.Println(bubbleSort(arr))
}
