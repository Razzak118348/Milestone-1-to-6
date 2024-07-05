class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    move(){
        console.log('Hi this is vaical')
    }
}

// extend maen onno class er property golo o add hobe ... 
class Buss extends Vehicle{
constructor(name,price,seat,ticketPrice){
    super(name,price);//parent k diye dibo

    this.seat=seat ;
    this.ticketPrice=ticketPrice;
}

}

class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price)
        this.load=load;
    }
}

const buss=new Buss('P-poribohon',50000200,50,510)
console.log(buss)