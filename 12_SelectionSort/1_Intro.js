// Selection Sort
/*
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position
[5,3,4,1,2] // compare minimum with next position in array 5and 3, 3 is minimum
[5,3,4,1,2] // compare 3,4 and 3 is minimum
[5,3,4,1,2] // compare with 1, then 1 is the minimum
[5,3,4,1,2] // compare with 2, then 1 is th minimum
[1,3,4,5,2] // swap the minimum number to the beginning.
*/

//Selection Sort Psudocode
/*
1. Store the first element as the smallest value you've seen so far.
2. Compare this item to the next item in the array until you find a smaller number
3. If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
4. If the "minimum" is not the value (index) you initially began with, swap the two values.
5. Repeat this with the next element until the array is sorted.
*/

// Selection Sort Implementation
function selectionSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        var lowest = i;
        for(var j = i+1; j<arr.length; j++) {
            console.log(i,j, lowest)
            if (arr[j] < arr[lowest]){
                lowest = j
            }
        }
        console.log(arr)
        console.log("SWAPPING TO: ")
        console.log(i, lowest)
        // swap according to the index
        if(i!==lowest) {
            var temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}
selectionSort([0,2,34,22,10,19,17])