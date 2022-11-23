/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2) {
    let strNum1 = num1.toString()
    let strNum2 = num2.toString()
    let valid = false
    if(strNum1.length !== strNum2.length) { // fail safe condition
        console.log('Length mismatched')
        valid= false
        return valid
    }

    let countNum1 = {}
    let countNum2 = {}

    for(let val of strNum1) {
        countNum1[val] = ++countNum1[val] || 1
    }
    for(let val of strNum2) {
        countNum2[val] = ++countNum2[val] || 1
    }
    console.log(`countNum1 : `, countNum1)
    console.log(`countNum2 : `, countNum2)
    for(let key in countNum1) {
        if ( countNum1[key] !== countNum2[key]){
            console.log('False frequency')
            valid = false
            return valid
        }
    }
    console.log('Same Frequency')
    valid = true
    return valid
}


//sameFrequency(182,281) // true
//sameFrequency(34,14) // false
//sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false