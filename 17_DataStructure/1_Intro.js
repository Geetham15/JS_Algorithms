/*
Data structures are collections of values, the relationships among them, and the functions
or operations that can be applied to the data.
*/
//ES2015 Class Syntax
//Class
/* A blueprint for creating objects with pre-defined properties and methods
*/
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
    }
    //Instance Methods
    fullName() {
        return `Your full name is ${firstName}`
    }
}
// The method to create new objects must be called constructor
// The class keyword creates a constant,so you can not redefine it. Watch out for the syntax as well

let firstStudent = new Student("Colt","Steele")
let secondStudent = new Student("Blue","Steele")