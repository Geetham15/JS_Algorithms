//Count Unique Values

/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //7
countUniqueValues([]) //0
countUniqueValues([-2, -1, -1, 0, 1]) //4
*/

//Time complexity O(n) -- because looping once
function countUniqueValues(arr) {
    if(arr.length === 0) return 0; // fail safe condition
    var i = 0;
    for(let j = 1; j<arr.length; j++){
        if(arr[i] !== arr[j]) { // if both the values are different, move the i to next index and replace the value of j to next place in array.
            i++;
            arr[i] = arr[j]           
        }
        //console.log(i,j) // i is the index of 6       
    }
    console.log(i+1)
    return i+1 // increment to 1 to get the length
}
countUniqueValues([1,1,2,2,3,3,4,5,6,6,7])
//   i
//[1,2,2,2,3,3,4,5,6,6,7]
//     j