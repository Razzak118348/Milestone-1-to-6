// //you can pass function as perameter 
// function greeting(greetingHandler){
//     greetingHandler();//by using as perameter you can call the function in another function ;
    
//     // it is called callback function
// }

// function greetingHandler(){
//     console.log('good Morning')
// }
// greeting(greetingHandler)


function greeting(greetingHandler,name){
    greetingHandler(name);//by using as perameter you can call the function in another function ;
    
    // it is called callback function
}

function greetingHandler(name){
    console.log('good Morning',name)
}
greeting(greetingHandler,'rafa')
greeting(greetingHandler,'raju')
greeting(greetingHandler,'kaju')
greeting(greetingHandler,'kabila')
greeting(greetingHandler,'mofiz')
greeting(greetingHandler,'mofiza')
greeting(greetingHandler,'anonto')

function submit(){
    console.log('submit-button click')
}

document.getElementById('btn-submit').addEventListener('click',submit)