// Multiple Pointers
/*
    Creating pointers or values that correspond to an index or position and move towrds the beginning, end
    or middle based on a certain condition

    Very efficient for solving problems with minimal space complexity as well
*/

//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair
//where the sum is 0. Return an array that includes both values that sum or zero or undefined if a pair does not exist

/*
Exanple

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) //undefined
sumZero([1, 2, 3]) //undefined

*/
function sumZero(arr) {
    for(let i=0; i < arr.length; i++) {
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === 0) {
                console.log([arr[i],arr[j]])
                return [arr[i],arr[j]]
            }
        }
    }
}
//sumZero([-2, 0, 1, 3])

function sumZero_Refactor(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right]
        if( sum === 0){
            console.log([arr[left], arr[right]])
            return [arr[left], arr[right]]
        } else if (sum > 0){
            right--
            console.log('right : ', right)
        } else {
            left++
            console.log('left : ', left)
        }
    }
}
sumZero_Refactor([-4,-3,-2,-1,0,1,2,3,10])