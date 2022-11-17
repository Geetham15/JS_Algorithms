const {performance} = require('perf_hooks')

function addUpTo(n) {
    let total = 0
    for(let i=1; i<=n; i++){
        total += i
    }
    return total;
}

function addUpToMath(n){
    return n*(n+1)/2
}

let t1 = performance.now()
console.log('addUpTo() ', addUpTo(6)) // 1+2+3+4+5+6 = 21
let t2 = performance.now()
console.log(`Time Elapsed addUpTo(): ${(t2 - t1)/1000} seconds.`)

let t3 = performance.now()
console.log('addUpToMath() ', addUpToMath(6))
let t4 = performance.now()
console.log(`Time Elapsed addUpToMath(): ${(t4 - t3)/1000} seconds.`)