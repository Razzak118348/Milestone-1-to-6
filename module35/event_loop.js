function a(){
    console.log('a')
    b();
    console.log('aa')
}
function b(){
    console.log('b')
    c()
    console.log('bb')

}

function c(){
    console.log('c')
    console.log('cc')
}

function x(){
    console.log('x')
    y();
    console.log('xx')
}
function y(){
    console.log('y')
    z()
    console.log('yy')

}

function z(){
    console.log('z')
    console.log('zz')
}
//fatch er kase age geleo fatch late kore tai onno function golo execute hoiya gese

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data => console.log(data))

a();
x();