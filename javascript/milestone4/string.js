const drink='water';
let liquid='   Water';
 liquid=liquid.trim();

 console.log(liquid);
 console.log(liquid.toLowerCase())

 console.log("   this is output section of condition ")
if(drink===liquid.toLocaleLowerCase())
{
    console.log('the other name of water is life');
}
else{
    console.log('  dont follow the condition')
}
