function stopWatch(){
    let counter =0;
    return  function(){
        counter++;
        return counter;
    }
}

const Watch1=stopWatch()
console.log(Watch1())
console.log(Watch1())
console.log(Watch1())
console.log(Watch1())
console.log(Watch1())
console.log(Watch1())

console.log('this is watch2')
const watch2= stopWatch()
console.log(watch2())
console.log(watch2())
console.log(watch2())
console.log(watch2())
console.log(watch2())

console.log('this is again watch1')
console.log(Watch1())



function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
      console.log('hi this is inner function')
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
console.log(myFunc())
  