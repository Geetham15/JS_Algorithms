const {performance} = require('perf_hooks')
//Algorithms
// A process or set of steps to accomplish a certain task
 // 1. Devise a plan for solving problems
 // 2. Master common problem solving patterns

 // A simple, foolproof, Magical, Miraculous, Fail-safe approach

//Steps to problem solving
//1. Understand the problem
//2. Explore concrete examples
//3. Break it down
//4. Solve/Simplify
//5. Look Back and Refactor

// Explore Examples\
/*

1. Start with simple examples
2. Progress to more complex examples
3. Explore examples with empty inputs
4. Explore examples with invalid inputs
*/

//Write a function which takes in a string and returns counts of each character in the string.
// inputs and expected outputs
// charCount('aaaa') // {a:4, b: 0, c:0}
// charCount('hello') // {h:1, e:1, l:2, o:1}

// "my phone number is 182763"
// "hello hi"
// charCount('')

//Write a function which takes in a string and returns counts of each character in the string.
//Break it down
function charCount(str) {
    var t3 = performance.now()
    //make object to return at end
    var result = {}
    //loop over string, for each characters...
    for( var i = 0; i<str.length; i++){
        var char = str[i].toLowerCase()
        if(/[a-z0-9]/.test(char)){ // check the character for number or lower case letter
            //if the char is number/letter and is a key in object, add one to count
            if(result[char] > 0){
                result[char]++
            }
            //if the char is number/letter and not in object, add it to object and set value to 1.
            else {
                result[char] = 1
            }
        }
    }
        
        
        //if character is something else (space, period, etc.) don't do anything
    //return object at the end

    //return an object with keys that are lowercase alphanumeric characters in the string.
    console.log(result)
    var t4 = performance.now()
    console.log(`Time Elapsed for for of method ${(t4-t3)} seconds`)
    return result
}
charCount("Hello hi")

// Look back and refactor
function charCountforof(str) {
    var t1 = performance.now()
    var result = {}
    for( var char of str){
        if(isAlphaNumeric(char)) { //fastest
         char = char.toLowerCase()
       // if(/[a-z0-9]/.test(char)){  // regexp is 55% slower than the char code test
            result[char] = ++result[char] || 1
            // if(result[char] > 0){
            //     result[char]++
            // } else {
            //     result[char] = 1
            // }
        }
    }
    var t2 = performance.now()
    console.log(`Time Elapsed for for of method ${(t2-t1)/1000} seconds`)
    console.log(result)
    return result
}
function isAlphaNumeric(char){
    var code = char.charCodeAt(0)
    if(!(code > 47 && code < 58) &&  //numeric 0-9
       !(code > 64 && code < 91) &&  //upper alpha A-Z
       !(code > 96 && code < 123)) {  //lower alpha a-z
        return false
    }
    return true;
}
charCountforof("Hello hi")

