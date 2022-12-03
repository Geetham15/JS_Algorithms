// Bubble sort
 // A sorting algorithm where the largest values bubble up to the top!
 // Example [29, 10, 14, 30, 37, 14, 18]
 //          [10, 29] => [10, 14, 29] => [ 10, 14, 29,30] => [ 10, 14, 29, 30, 37] => [ 10, 14, 29, 30, 14, 37] => [ 10, 14, 29, 30, 14, 18, 37]
 //           

 // Before we sort, we must swap!

 // Many sorting algorithms involve some type of swapping functionality (e.g., swapping to numbers to put them in order)

 //ES5

 function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp
 }

 //ES2015
 const swap1 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
 }

 //Bubble Sort pseudocode
 /*
 1. Start looping from with a variable called i the end of the array towards the beginning
 2. Start an inner loop with a variable called j from the beginning until i -1
 3. If arr[j] is greater than arr[j+1], swap those two values!
 4. Return the sorted array.
 */
function bubbleSort(arr) {
    //ES2015
    const swapNumber = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
     }
    for(var i = arr.length; i > 0; i--){
        for(var j=0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]) {
                // swap! //ES5
                // var temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp
                swapNumber(arr, j , j+1) 
            }
        }
        console.log("ONE PASS COMPLETE!")
    }
    console.log('final array : ', arr)
    return arr;
}
//bubbleSort([37, 45, 29, 8])
//[37, 45, 29, 8]
//[37, 29, 8, 45]
//[29, 8, 37, 45]
//[8, 29, 37, 45]
//bubbleSort([37, 45, 29, 8,12,88,-3]) //[-3,  8, 12, 29,37, 45, 88]
bubbleSort([8,1,2,3,4,5,6,7]) //[1,2,3,4,5,6,7,8]

// Optimized with noswaps
function bubbleSortOptimized(arr) {
    var noSwaps;
    //ES2015
    const swapNumber = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
     }
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        console.log('No Swaps happened')
        for(var j=0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]) {
                // swap! //ES5
                // var temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp
                swapNumber(arr, j , j+1) 
                noSwaps = false
                console.log('swaps happened')
            }
        }
        if(noSwaps) break;
        console.log("ONE PASS COMPLETE!")
    }
    console.log('final array : ', arr)
    return arr;
}
bubbleSortOptimized([8,1,2,3,4,5,6,7]) //[1,2,3,4,5,6,7,8]