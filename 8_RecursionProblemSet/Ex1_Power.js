/*
power
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
*/
function power(base, exponent){
    if(exponent === 0) return 1
    let val = base * power(base, exponent - 1)//2*(2*3)*(2*2)*(2*1)*(2*0) = 2*2*2*2*1 = 16
    console.log(val)
    return val
}

//power(2,0) // 1
//power(2,2) // 4
power(2,4) // 16