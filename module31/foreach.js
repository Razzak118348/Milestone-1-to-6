const num=[3,45,43,3,32]
// const result=num.forEach((n) => {
//    const double= n*2
//    console.log(double)
//     return double;
// })

// console.log(result)
 //.> you got undifined ..
// so map and forEach operation same .but map return array but forEach do not return any array . but you can do operation 

const players=[3,4,5,6,34,99]
// filter 
// const selected =players.filter((x) => {
//    const y= x>20;
//    return y;
// });
// console.log(selected)

const select = players.filter(x => x>20)
console.log(select)

const z= players.filter(i=>i<10)
console.log(z)

const even=players.filter(i=>i%2==0)
console.log(even)

