//Radix Sort Pseudocode

/*
1. Define a function that accepts list of numbers
2. Figure out how many digits the largest number has
3. Loop from k=0 upto largest number of digits
4. For each iteration of loo:
    4.1 Create buckets for each digit (0 to 9)
    4.2 Place each number in the corresponding bucket based on its kth digit.
5. Replace our existing array with values in our buckets, starting with 0 and going upto 9.
6. Return list at the end!
*/

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}
  
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    console.log(maxDigitCount)
    for(let k=0; k<maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])          
        }
       
        console.log(digitBuckets)
        nums = [].concat(...digitBuckets)
        console.log(nums)
    }
    return nums
}
radixSort([23, 345, 5467, 12, 2345, 9852]) //[ 12, 23, 345, 2345, 5467, 9852 ]

//Big O
/*
n - length of array
k-number of digits(average)
Time Complexity
---------------
Best - O(nk)
Average - O(nk)
Worst - O(nk)
Space Complexity - O(n+k)
*/