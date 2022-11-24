/*
Recursion
---------
A process ( afunction in our case) that calls itself

Call stack
Anytime a function is invoked it is placed(pushed) on the top of the call stack
When javascript sees the return keyword or when the function ends, the compiler will remove (pop)

How recurisve functions work
Invoke the same function with a different input until you reach your base case!

Base case
The condition when the recursion ends.

*/
function countDown(num) {
    if(num <= 0) { //base case
        console.log("All done")
        return;
    }
    console.log(num)
    num--
    countDown(num) // function invokes with different input
}
//countDown(5)

//Our second recursive function

function sumRange(num){
    if (num === 1) return 1; //base case
    let val =  num + sumRange(num - 1)
    console.log(val)
    return val
}

//sumRange(3) // 6
// return 3 + sumRange(2)
//              return 2 + sumRange(1)
//                          return 1 
// 3+2+1

//Factorial Iteratively
function factorial(num) {
    let total = 1
    for (let i=num; i> 0; i--){
        total *=i
    }
    console.log(total)
    return total
}
//factorial(4)

//factorial recursively
function factorial(num) {
    if (num === 1) return 1;
    let val= num * factorial(num - 1)
    console.log(val)
    return val
}
factorial(4)
factorial(5)

//Common recursion pitfalls
//Where things go wrong
/*
No base case
Forgetting to return or returning wrong thing!
Stack overflow!
*/

//Helper method recursion
function outer(input) {
    var outerScopedVariable = []
    function helper(helperInput) {
        //modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)
    return outerScopedVariable
}

//Collect odds
function collectOdds(arr) {
    let result = []
    
    function helper(helperInput) {
        if(helperInput.length === 0) {
            return
        }
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    console.log('result : ', result)
    return result
}
collectOdds([1,2,3,4,5,6,7,8,9])

//pure recursion
function collectOddValues(arr) {
    let newArr = []
    if (arr.length === 0) {
        console.log(newArr)
        return newArr;
    }
    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOdds(arr.slice(1)))
    console.log(`new array : ` , newArr)
    return newArr
}
collectOddValues([1,2,3,4,5,6,7,8,9])

//pure recursion tips

/*
1. For arrays, use methods like slice, the spread operator, and the concat that make copies of arrays so  you do not mutate them
2. Remember that srings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
3. To make copies of objects use Object.assign, or the spread operator
*/