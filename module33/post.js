function loadPost(){
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res => res.json())
 .then(post => displayPost(post))
 .catch(error => console.error('error happend',error))
}


function displayPost(post){
    const postContainer= document.getElementById('post-container')
  /*
  append rule :
1.get the element where you want to addd  new element
2.creat child element 
3.set innerText or innerHTML
4.append child
  */  
    for(const item of post){
        console.log(item);
       const Postdiv =document.createElement('div')
       Postdiv.classList.add('post-div')
       Postdiv.innerHTML=
       `
       <h4>user-${item.id}</h4>
       <h5> Post: ${item.
        title}</h5>
       <p>Post Description: ${item.body}</p>
       `
       postContainer.appendChild(Postdiv)
    
    }
}

loadPost();

