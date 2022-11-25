// Objective
/*
Describe searching algorithm
Implement liner search on arrays
Implement binary search on sorted arrays
Implement a naive string searching algorithm
Implement the KMP string searching algorithm
*/
// Linear Search
//Check each element in the array

//Javascript has search!
/*
There are many different search methods on arrays in Javascript

indexOf
includes
find
findIndex
*/

//Linear search pseudocode
/*
1. This function accepts an array and a value
2. Loop through the array and check if the current array element is equal to the value
3. If it is, return the index at which the element is found
4. If the value is never found, return -1
*/

/*
Linear Search Exercise
Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

Examples:

linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
linearSearch([100], 200) // -1
*/

function linearSearch(arr, val){ //Time complexity O(n)
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == val){
            console.log(i)
            return i
        }
    }
    console.log(-1)
    return -1
  }
  
  linearSearch([10, 15, 20, 25, 30], 15) // 1
  linearSearch([100], 200) // -1