// Binary Search
/*
1. Binary search is a much faster form of search
2. Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
3. Binary search only works on sorted arrays.
*/

//Binary Search Pseudocode
/*
1. This function accepts a sorted array and a value.
2. Create a left pointer at the start of the array, and a right pointer at the end of the array.
3. While the left pointer comes before the right pointer: 
    3.1 Create a pointer in the middle
    3.2 If you find the value you want, return the index
    3.3 If the value is too small, move the left pointer up
    3.4 If the value is too large, move the right pointer down
4. If you never find the value, return -1
*/
/*
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here - 
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - 
https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

Examples:

binarySearch([1,2,3,4,5],2) // 1
binarySearch([1,2,3,4,5],3) // 2
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],6) // -1
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
*/

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    
    while (arr[middle] !== elem && start <= end) {
        console.log(start, middle, end)
        if (elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    console.log(start, middle, end)
    if(arr[middle] === elem){
        console.log('middle', middle)
        return  middle
    } else{
        console.log(-1)
        return -1;
    }
}   

binarySearch([2,5,6,9,13,15,28,30], 50)

//[2,5,6,9,13,15,28,30]
// S     M           E // S=0, M=3, E=7

//[2,5,6,9,13,15,28,30]
//          S  M     E // S=4, M = 5, E= 7

//[2,5,6,9,13,15,28,30]
//               SM  E // S=6, M = 6, E= 7