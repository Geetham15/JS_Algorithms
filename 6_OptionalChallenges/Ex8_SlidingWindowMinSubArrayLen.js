/* 
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
 If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
*/

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity

    while (start < nums.length){ // 0<6 // 1<6
        // if current window doesn't add up to the given sum then move the window to right
        if( total < sum && end < nums.length) { // 8<7 && 4<6
            console.log("In condition 1 ")
            total += nums[end] // total = 2+3 // 5+1 //6+2 //
            end++ //end = 1//2//3//4
            console.log('end : ', end)
        }
        // if current window adds up to at least the sum given, then we can shrink the window
        else if ( total >= sum) { //8>=7 // 6>=7
            console.log("In condition 2")
            minLen = Math.min(minLen, end-start) //min(0,4)
            console.log('minLen : ', minLen) //4
            total -= nums[start] // total =8-2 = 6
            start++ // start = 1
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            console.log("In condition 3")
            break;
        }
    }
    console.log('minLen : ' , minLen)
    return minLen === Infinity ? 0 : minLen
}
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
//minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
//minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0