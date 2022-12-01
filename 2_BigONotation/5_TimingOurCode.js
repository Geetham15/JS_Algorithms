const { constants } = require('buffer');
const {performance} = require('perf_hooks')

function addUpTo(n) {
    let total = 0
    for(let i=1; i<=n; i++){
        total += i
    }
    return total;
}

function addUpToMath(n){
    return n*(n+1)/2
}

let t1 = performance.now()
console.log('addUpTo() ', addUpTo(6)) // 1+2+3+4+5+6 = 21
let t2 = performance.now()
console.log(`Time Elapsed addUpTo(): ${(t2 - t1)/1000} seconds.`)

let t3 = performance.now()
console.log('addUpToMath() ', addUpToMath(6))
let t4 = performance.now()
console.log(`Time Elapsed addUpToMath(): ${(t4 - t3)/1000} seconds.`)

function countUpAndDown(n) {
    console.log('Going up!')
    for(let i=0; i<n; i++){
        console.log(i)
    }
    console.log('At the top!\nGoing down.....')
    for(let j=n-1; j>=0; j--){
        console.log(j)       
    }
    console.log('Back down. Bye!')
}

countUpAndDown(10)

//MOAR Example

function printAllPairs(n){
    for(var i=0; i<n; i++){ //O(n)
        for(var j=0; j<n; j++){ //O(n)
            console.log(i,j) //O(n) operation inside of an O(n) operation O(n^2)
        }
    }
}
printAllPairs(5)

//rule of thumb for big O notation

//Constants don't matter
// O(2n) => O(n)
// O(500) => O(1)
// O(13n^2) => O(n^2)

//Smaller Terms don't matter
/*
O(n+10) => O(n)
O(1000n +50) => O(n)
O(n^2 +5n + 8) => O(n^2)
*/

//Big O Shorthands
/*
1. Arithmetic operations are constants
2. Variable assignment is constants
3. Accessing elements in an array(by index) or object (by key) is constant
4. In a loop, the complexity is the lenth of the loop times the complexity of whatever happens inside of the loop.

*/

function logAtLeast5(n){
    for(var i = 1; i<= Math.max(5,n); i++) { //O(n)
        console.log(i)
    }
}

function logAtLeastMin(n){
    for(var i = 1; i<= Math.min(5,n); i++) { //O(1)
        console.log(i)
    }
}

logAtLeastMin(3)
//Time complexity
// how can we analyze the runtime of an algorithm as the size of the inputs increases?

//Space Complexity
//How much additional memory do we need to allocate in order to run the code in our algorithm?

//auxiliary space
//To refer to space required by the algorithm, not including space taken up by the inputs.

//Space complexity in JS
 /*
1. Most primitives ( booleans, numbers, undefined, null) are constant space
2. Strings require O(n) space (where n is the string length)
3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
 */

//Space complexity Example 1
function sum(arr){
    let total = 0
    for(let i=0; i< arr.length; i++){
        total+=i
    }
    return total
}
sum([1,2,3]) //O(1)

//Space Complexity Example 2
function double(arr) {
    let newArr = []
    for(let i=0; i< arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}
double([1,2,3]) // O(n)space!

//Logarithms
/*
Logarithmic time complexity is great!
log2(value) = exponent ====> 2^exponent = value
log2(8) = 3 ========> 2^3 = 8

We'll omit the 2. log === log2
*/