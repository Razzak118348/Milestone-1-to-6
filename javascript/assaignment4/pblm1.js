function calculateMoney(ticketSale) {
    if(ticketSale<0){
        return 'Invalid Number';
    }
    else{
        let RemainingMoney=((ticketSale*120)-(500+(8*50)));
        return RemainingMoney;
    }
  
}

// let lastMoney=calculateMoney(1055)
// console.log(lastMoney)