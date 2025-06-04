console.log('Toyosi')
setTimeout(function (){
    console.log('Async Task complete');   
}, 2000);

console.log('End')

fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => console.log(data))

async function getJoke(){
    try{
        let reply = await fetch('https://official-joke-api.appspot.com/random_joke');
        let joke = await reply.json()
        document.getElementById('joke-setup').innerText= joke.setup
        document.getElementById('joke-punchline').innerText = joke.punchline
    }catch(error){
        console.log('oops something went wrong')
    }
}

const getAdvice =async ()=>{
    try{
        let response= await fetch('https://api.adviceslip.com/advice')
        let answer =await response.json()

        document.getElementById("Advice-setup").innerText = answer.slip.advice

        document.getElementById("Advice-Response").innerText= answer.slip.id
    }catch(error){
        console.log('oops! Advice gone wrong')
    }
}