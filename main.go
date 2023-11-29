package main

import (
	"fmt"
	"math"
)

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

func selectionSort(arr []int) []int {
	for i, _ := range arr {
		smallest := i
		for j := i; j < len(arr)-1; j++ {
			if arr[j] < arr[smallest] {
				smallest = j
			}
		}
		if smallest != i {
			temp := arr[i]
			arr[i] = arr[smallest]
			arr[smallest] = temp
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

func merge(arr1, arr2 []int) []int {
	result := []int{}
	i := 0
	j := 0

	for i < len(arr1) && j < len(arr2) {
		if arr1[i] < arr2[j] {
			result = append(result, arr1[i])
			i++
		} else {
			result = append(result, arr2[j])
			j++
		}
	}
	for i < len(arr1) {
		result = append(result, arr1[i])
		i++
	}
	for j < len(arr2) {
		result = append(result, arr2[j])
		j++
	}

	return result
}

func mergeSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}
	mid := int(math.Floor(float64(len(arr) / 2)))
	left := mergeSort(arr[0:mid])
	right := mergeSort(arr[mid:])
	return merge(left, right)
}

func main() {
	arr := []int{4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
		23, 2, 453, 546, 75, 67, 4342, 32}

	fmt.Println("Bubble:\n", bubbleSort(arr))
	fmt.Println("Selection:\n", selectionSort(arr))
	fmt.Println("Insertion:\n", insertionSort(arr))
	fmt.Println("Merge:\n", mergeSort(arr))

}
