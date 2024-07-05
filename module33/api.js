function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
} 
 
 function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()) //json is a function.
    .then(item => displayUsers(item))
 } 

 function displayUsers(data){
//   console.log(data)
//     for(const user of data){
//         console.log(user.name)
//         console.log(user.email)
//     }

 const ul = document.getElementById('users');
 for(const user of data){
    const li= document.createElement('li');
    li.innerText=user.name;
    ul.appendChild(li);

 }
 }