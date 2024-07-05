const data =[{id:1,name:'raju',address:'dinajpur'}]
// console.log(data[0].address)
const product={
    count:500,
    data:[
        {id:1,name:'asus',price:4944040},

    {id:2,name:'apple',price:484949293}
]
}
console.log(product.data[0].name)

const user ={
    id:300,
    name:'Rafa',
    address:{
        street:'Narayangonj -1200',
        house:'bondor',
        firestName:'Jannatul',
        lastName:'Mim',
        about:{
        ssc:'from biddaniketon',
            hsc:'from Narayangonj college',
        }
    }
}
console.log(user.address.about.ssc)

const user2 ={
    id:300,
    name:'raju',
    address:{
        street:'Narayangonj -1200',
        house:'bondor',
        firestName:'Jannatul',
        lastName:'Mim',
       Myself:{
        ssc:'from biddaniketon',
            hsc:'from Narayangonj college',
        }
    }
}
// ? this is optional chain 
console.log(user2.address.about?.ssc)
//jodi about er man paw tahole samne agaw na hole samne jaiyo na => undefined
