function btnclick() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error')
 
    try {
        //console.log(number)
        const age = parseInt(ageText);
        if (isNaN(age)) {
            console.log('age not found', age);
            throw "Please enter a number";
        }
        else if (age < 18) {
            throw " You are child"
        }
        else if (age > 30) {
            throw " Your age is long"
        }
      
        else {
            errorTag.innerHTML='you are aplicable'
           
        }
      
    }
    
    catch (err)//throw er content accept korbe
    {
        console.log('Error:', err)
       errorTag.innerHTML="somthing went wrong:"+err;
    }

    //error hoile o kaj korbe na hoile o kaj korbe finally kaj korbe
    finally {
        console.log('all done finally')
    }
    console.log(3243234)
}