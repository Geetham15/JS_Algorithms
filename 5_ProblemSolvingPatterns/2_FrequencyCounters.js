const {performance} = require('perf_hooks')
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

//Write a function called same, which accepts two arrays.
//The function should return true if every value in the array has it's corresponding value squared in the second array.
//The frequency of values must be the same.

// Solution 1
function same(arr1, arr2) {
    let t1 = performance.now()
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i<arr1.length; i++ ){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        console.log('correctIndex: ', correctIndex)
        if(correctIndex === -1){
            return false
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1)
        console.log('After splice: ', arr2)
    }
    let t2 = performance.now()
    console.log(`Time Elapsed same() : ${(t2 - t1)} seconds`)
    return true
}

same([1,2,3,2],[9,1,4,4])

// Solution 2
function same_refactor(arr1, arr2) {
    console.log(`Refactor the same function`)
    let result = false
    let t1 = performance.now()
    if (arr1.length !== arr2.length) {
        result = false
        return result
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1) {
        //frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log('frequencyCounter1 : ', frequencyCounter1)
    console.log('frequencyCounter2 : ', frequencyCounter2)

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            result = false
            console.log('result : ', result)
            return result
        }
        console.log('frequencyCounter2[key ** 2] : ', frequencyCounter2[key ** 2])
        console.log('frequencyCounter1[key] : ', frequencyCounter1[key])
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            result = false
            console.log('result : ', result)
            return result
        }
    }
    let t2 = performance.now()
    console.log(`Time Elapsed same() : ${(t2 - t1)} seconds`)
    result = true
    console.log('result : ', result)
    return result
}

same_refactor([1,2,3,2],[9,1,4,4])