// Divide and Conquer

/*
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
This pattern can tremendously decrease time complexity
*/

//Given a sorted array of integers, write a function called search, that accepts a value and returns the index
//where the value passed to the function is located. If the value is not found, return -1

/*
Example:
search([1,2,3,4,5,6], 4) //3 index value
search([1,2,3,4,5,6], 6) //5
search([1,2,3,4,5,6], 11) // -1
*/

//Linear search - Time complexity O(n)

function search(arr, val) {
    for(let i = 0 ; i < arr.length; i++) {
        if (arr[i] === val) {
            console.log(i)
            return i
        }
    }
    console.log('-1')
    return -1
}
search([1,2,3,4,5,6], 4)

//Refactor using Binary search - Time complexity Log(N)

function search_refactor(arr, val) {
    let min = 0
    let max = arr.length - 1

    console.log(min , max)
    while (min <= max) {
        let middle = Math.floor((min + max)/2)
        console.log('middle : ', middle)
        let currentElement = arr[middle]
        console.log('currentElement : ', currentElement)

        if(arr[middle] < val){
            min = middle + 1
            console.log('min : ' , min)
        } else if (arr[middle > val]) {
            max = middle - 1
            console.log('max : ', max)
        } else {
            return middle
        }
    }
    console.log('-1')
    return -1
}

search_refactor([1,2,3,4,5,6], 6)
// take a sorted array
// find the mid point
// check the value in the first half, if the val is less than the middle point value
// take the first half and divide into another half subset and check for the value

// [1,2,3] // 6 not found
// [4,5] // 6 not found
// 6 