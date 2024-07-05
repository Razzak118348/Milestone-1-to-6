const shop={
    owner:'rafa',
    address:{
        street:'bondor narayangonj',
        city:'Narayangonj',
        country:'Bangladesh',
    },
    product:['leptop','mic','monitor','keyboard'],
    revenew:34553,
}
console.log(shop)
//JSON = Java Script Object Notation
const shopJSON= JSON.stringify(shop)//stringify make the value as string .
console.log(shopJSON)

console.log(JSON.parse(shopJSON))//the parse make string jeson as value.