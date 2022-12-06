// Insertion Sort
/*
Builds up the sort by gradually creating a larger left half which is always sorted

//Pseudocode
1. Start by picking the second element in the array
2. Now compare the second element with the one before it and swap if necessary.
3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
4. Repeat until the array is sorted.
*/

function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++){
        var currentVal = arr[i]
        for(var j = i-1;j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currentVal
        console.log(arr)
    }
    return arr;
}

insertionSort([2,1,9,76,4])

/*
Big O of Sorting Algorithms
Algorithm      | Time Complexity (Best) | (Average) | (Worst) | (Space Complexity)
Bubble Sort    |   O(n)                 | O(n^2)    |  O(n^2) |  O(1)
Insertion Sort |   O(n)                 | O(n^2)    |  O(n^2) |  O(1)
Selection Sort |   O(n)                 | O(n^2)    |  O(n^2) |  O(1)
*/