/**
 * truthy:
 * 1.true
 * 2.any number positive or negative is truth 
 * 3> any string
 * 4."0" and 'false' is truth
 * 5.empty object and empty array is true [] and {}
 
 
    Falsy:
    1.false
    2.the variable is 0 then false
    3.empty string
    4.if the data is undefine then you will get false
    5.
 */

let x =[];
console.log(x)
// if(x){
//     console.log('value of x in truthy')
// }
// else{
//     console.log('value of x is falsy')
// }

if(!x){
    console.log('wow it false')
}

const z=1
if(!!z){
    console.log('its true')
}