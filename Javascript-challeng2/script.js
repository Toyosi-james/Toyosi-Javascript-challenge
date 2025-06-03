console.log('Toyosi')
setTimeout(function (){
    console.log('Async Task complete');   
}, 2000);

console.log('End')

fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => console.log(data))