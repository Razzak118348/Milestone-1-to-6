// 1st way 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())// ..json is not similar but close to JSON.parse
//       .then(json => console.log(json))


// 2nd way to write 
    /*
    const url='https://jsonplaceholder.typicode.com/todos/1'
    
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    */


// 3rd way 
function loadData(){
 const url='https://jsonplaceholder.typicode.com/todos/1'
    
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}
