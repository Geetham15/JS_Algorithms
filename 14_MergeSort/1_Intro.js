//Intro to Crazier Sorts
//Intermediate Sorting Algorithms
//Faster sorts
/*
1. There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)
2. There's a trade off between efficiency and simplicty
3. The more efficient algorithms are much less simple, and generally take longer to understand
*/
//Merge Sort
/*
1. It's a combination of two things - merging and sorting!
2. Exploits the fact that arrays of 0 or 1 element are always sorted
3. Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
*/

// How does it work?
/*
[8,3,5,4,7,6,1,2] //split
[8,3,5,4] [7,6,1,2] //split again
[8,3] [5,4] [7,6] [1,2] //split again
[8][3][5][4][7][6][1][2] // compare for smallest and merge two arrays
 [3,8] [4,5] [6,7] [1,2] //Merging two arrays
 [3,4,5,8] [1,2,6,7] //Repeat
 [1,2,3,4,5,6,7,8] //Final merge of sorted arrays
 */
