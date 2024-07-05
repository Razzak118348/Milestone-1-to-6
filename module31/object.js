const product = [
    { id: 1, name: 'lenovo', price: 40000 },
    { id: 2, name: 'dell', price: 60000 },
    { id: 3, name: 'hp', price: 70000 },
    { id: 4, name: 'mac', price: 490000 },
]
// map 
const productName=product.map(product =>product.name)
console.log(productName)
//foreach
product.forEach(p=>console.log(p.id))
//filter
const expensive =product.filter(p=>p.price>50000)
console.log(expensive)
//find
const affordable = product.find(p=>p.price<50000)
console.log(affordable)
//reduce
const total =product.reduce((acumulator,current)=>acumulator+current.price,0)
console.log(total)