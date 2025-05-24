let firstText = document.getElementById('first').textContent="Hello Toyosi"
let secondText =document.getElementById('second').textContent="Welcome Ayo"
let thirdText = document.getElementById('third').textContent ="It is so good to be here"

let button =console.log( document.querySelector('.btn'))
let container = console.log(document.querySelector('p'))

let num = document.querySelectorAll('h3')
for(let j = 0; j < num.length; j++){
    if(j % 2 === 0){
      num[j].style.backgroundColor= "green";
    }else{
        num[j].style.backgroundColor="blue"
    }
}

let listItems = document.getElementsByClassName('item')
for(l = 0; l < listItems.length; l++){
    let text =listItems[l].textContent;
    if(text.length > 20){
        listItems[l].style.backgroundColor="red"
        
    }
}