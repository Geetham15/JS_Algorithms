//Sliding Window
/*
    This pattern involves creating a window which can either be an array or number from one position to another
    Depending on a certain condition, the window either increases or closes ( and a new window is created)
    Very useful for keeping track of a subset of data in an array/string etc.
*/

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.

/*
maxSubarraySum([1,2,5,2,8,1,5], 2) //10
maxSubarraySum([1,2,5,2,8,1,5], 4) //17
maxSubarraySum([4,2,1,6], 1) //6
maxSubarraySum([4,2,1,6,2], 4) //13
maxSubarraySum([], 4) //null
*/

const {performance} = require('perf_hooks')

function maxSubarraySum(arr, num){
    let t1 = performance.now()
    if(num > arr.length) {
        return null
    }
    var max = -Infinity
    // Iterate the array not till the end, need to stop at the last set of elements to sum
    for(let i = 0; i < arr.length - num + 1; i++) {
        temp = 0
        for(let j = 0 ; j < num ; j++) {
            temp += arr[i + j]
        }
        if (temp > max){
            max = temp
        }
        console.log(temp, max)
    }
    let t2 = performance.now()
    console.log(`Time Elapsed maxSubarraySum ${(t2-t1)} seconds`)
    console.log(max)
    return max
}
maxSubarraySum([1,2,5,2,8,1,5], 4)
//1,2,5,2 //10
//2,5,2,8 //17
//5,2,8,1 //16
//2,8,1,5 //16

//This takes lot of iteration if the array is big

//Refactor using Sliding Window Pattern
function maxSubarrySum_refactor(arr, num) {
    let t1 = performance.now()
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) { // fail safe
        return null
    }
    for(let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = num; i < arr.length; i++) { 
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    console.log('maxSum : ', maxSum)
    let t2 = performance.now()
    console.log(`Time Elapsed maxSubarraySum_refactor ${(t2-t1)} seconds`)
    return maxSum
}

maxSubarrySum_refactor([1,2,5,2,8,1,5], 4)

/* sliding window pattern (subtract previous number and add next number to avoid loops)
 [1,2,5,2,8,1,5] , 4
  -     - // 1+2+5+2 = 10
    -     - // 10-1+8 = 17
       -    - // 17-2+1 = 16
         -    - // 16-5+5 = 16  
*/