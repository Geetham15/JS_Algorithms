/* // Pseudocode
1. Loop over the longer String
2. Loop over the shorter string
3. If the characters don't match, break out of the inner loop
4. If the characters do match, keep going
5. If you complete the inner loop and find a match, increment the count of matches
6. Return the count
*/

function naiveSearch(long, short) {
    var count = 0
    for(var i = 0; i < long.length; i++){
        for(var j = 0 ; j < short.length; j++) {
            console.log(short[j], long[i+j])
            if(short[j] !== long[i+j]) {
                console.log("BREAK")
                break;
            }
            if( j=== short.length - 1){
                console.log('fount one')
                count++;
            }
        }
    }
    console.log(count)
    return count;
}

naiveSearch("lorie loled", "pop") // 0
naiveSearch("lorie loled", "lol") //1
naiveSearch("lorie loled", "lo")  //2