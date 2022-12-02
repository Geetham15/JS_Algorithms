// Elementary Sorting Algorithms

//What is sorting?
 /*
Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
Examples
Sorting numbers from smallest to largest
Sorting names alphabetically
Sorting movies based on release year
Sorting movies based on revenue
 */
//Built - in javascript sorting
/*
1. The built-in sort method accepts an optional comparator function
2. You can use this comparator function to tell javascript how you want it to sort
3. The comparator looks at pair of elements ( and b), determines their sort order based onthe return value
    3.1 If it returns a negative number, a should come before b
    3.2 If it returns a positive number, a should come after b
    3.3 If it reurns 0, a and b are the same as far as the sort is concerned.
*/

// Telling JavaScript how to sort
    Examples:
    function numberCompare(num1, num2) {
        return num1 - num2;
    }
    [6,4,15,10].sort(numberCompare);
    // [4, 6, 10, 15] 
    // [15, 10, 6, 4] if the numberCompare have num2 - num1

function compareByLen( str1, str2) {
    return str1.length - str2.length
}

["Steele", "colt", "Data Structures", "Algorithms"].sort(compareByLen)
//["Colt", "Steele", "Algorithms", "Data Structures"] 
//["Data Structures", "Algorithms", "Steele", "Colt"] // str2.length - str1.length in compareByLen()