const product = [
    { id: 1, name: 'lenovo', price: 40000 },
    { id: 2, name: 'dell', price: 60000 },
    { id: 3, name: 'hp', price: 70000 },
    { id: 4, name: 'mac', price: 490000 },
]

//similar
//we don't need to use const and function keyword
class Item{
    country='bangladesh';

    constructor(name){
        this.name= name;
    }

    speak(talk){
        console.log(`talking about ${talk}`)

    }
}
// we need new keyword 
const lenovo = new Item('This is lenovo product')
//Item('This is lenovo product') will go as a perameter of self constructor..
console.log(lenovo)
lenovo.speak('deforastation')


class employ{

  constructor(name,sector)
  {
    this.name=name;
    this.sector=sector;
  }
  providing(service){
    console.log(`He is providing ${service}`)
  }
}

const Employ1=new employ('Razzak','Web Development')
console.log(Employ1)
Employ1.providing('website buildup')