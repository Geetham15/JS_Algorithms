//When to use objects
/*
1. When you don't need order
2. When you need fast access / insertion and removal
*/

//Big O of Objects

/*
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(1)
When you don't need any ordering, objects are an excellent choice!
*/

//Big O of Object Methods
/*
Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
hasOwnProperty - O(1)
*/
//Example
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favouriteNumbers: [1,2,3,4]
}
console.log(Object.entries(instructor))
console.log(Object.keys(instructor))
console.log(Object.values(instructor))
console.log(Object.hasOwnProperty("firstName"))