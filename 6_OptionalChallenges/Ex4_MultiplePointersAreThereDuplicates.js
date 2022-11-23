/*

Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

//Solution1 : Frequency Counter
function areThereDuplicates() {

    let collection = {}
    let valid = false
    for (let val of arguments) {
        collection[val] = ++collection[val] || 1
    }
    console.log(collection)

    for(let key in collection) {
        if(collection[key] > 1) {
            console.log("Duplicates true")
            valid = true
            return valid
        }
    }
    console.log('Duplicates false')
    valid= false
    return false
}
//Input
//areThereDuplicates(1, 2, 3) // false
//areThereDuplicates(1, 2, 2) // true 
//areThereDuplicates('a', 'b', 'c', 'a') // true 

/* OUTPUT
{ '1': 1, '2': 1, '3': 1 }
Duplicates false
{ '1': 1, '2': 2 }
Duplicates true
{ a: 2, b: 1, c: 1 }
Duplicates true
*/

//Solution 2 - Multiple Pointers
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b)
    let start = 0
    let next = 1
    let valid = false
    while (next < args.length) {
        if(args[start] === args[next]){
            console.log(args[start], args[next])
            console.log('Duplicates true')
            valid = true
            return valid
        }
        start++
        next++
        
    }
    console.log(args)
    console.log('Duplicates false')
    valid = false
    return valid
}

//areThereDuplicates(1, 2, 3) // false
//areThereDuplicates(1, 2, 2) // true 
//areThereDuplicates('a', 'b', 'c', 'a') // true  // Need to check not working correct in multiple pointer solution

// Solution 3: One Linear Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true