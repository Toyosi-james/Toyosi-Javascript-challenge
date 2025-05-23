// comparison operator
const d ="jane";
const e ="jane"

console.log(d==e)

// greater than and lesser than

const x = 77
const y = 99

console .log(x > y)
console.log(x<y)

// greater than or equals to and lesser than or equals 
const m = 30
const n = 20
console.log(m >= n)
console.log(m <= n)

// logical operator
//   OR
let isSunny = false
let isRainny= false
let answer=isSunny||isRainny
console.log(answer)

const male = false
const female = true
const gender =male || female && isSunny || isRainny
console.log(gender)

// Ternary operator 


// let Score = 70
//  let cutOffMark= Score < 100 && Score > 40 ? "you passed":"you did not pass"
//  console.log(cutOffMark)

//  let Status = 20
//  let attendance= 60
//  let result = Status >= 20 && attendance > 50 ? "you are eligible":"you are not eligible"
//  console.log(result)

//  let girl = false
//  let boy = true
//  let sex = girl || boy ? "confirmed":"not confirmed"
//  console.log(sex)

//  const valueOne = parseInt(prompt("Enter your bfirst value"));
// const valuetwo = parseInt(prompt("Enter your second value"));

// if (valueOne > valuetwo) {
//   alert(`${valueOne} is grater than ${valuetwo}`);
// } else {
//   alert(`${valuetwo} is grater than ${valueOne}`);
// }


let divide = (num1,num2)=>{
console.log(num1/num2)
}

divide(30,2)

// let check = ()=>{
//   let checkNumber= prompt("Enter A Number")
//   if (checkNumber % 2 === 0){
//     console.log("This is an even number")
//   }
//   else{
//     console.log("This is an odd number")
//   }
// }
// check()

// let highestNumber=(num1,num2,num3)=>{
//   num1=parseInt(prompt("Enter first number"))
//   num2 =parseInt(prompt("Enter Second Number"))
//   num3 =parseInt(prompt("Enter third Number"))
  
//   console.log(Math.max(num1,num2,num3))
// }
// highestNumber(20,30,50)


// let sample = (firstsample)=>{
// firstsample =prompt("Enter a string")
// alert(firstsample.split("").reverse().join(""))
// }
// sample()

// let letters =(longest)=>{
// longest = prompt("Enter a sentence")
// alert(longest.split("").lenght)
// }
// letters()

// .Create a function that takes age and alerts:
// 	•	“Child” if age is below 13
// 	•	“Teenager” if age is 13–19
//       . “Adult” if age is 20+

//   Write a function that takes a password and checks:
// 	•	If it’s empty → “Password is required”
// 	•	If it’s less than 6 characters → “Password is too short”
// 	•	Else → “Password is strong”
// Write a function that takes a temperature value and:
// 	•	Says “It’s cold” if it’s below 15
// 	•	“It’s warm” if it’s between 15 and 30
// 	•	“It’s hot” if it’s above 30 Write a function that takes a temperature value and:
// 	•	Says “It’s cold” if it’s below 15
// 	•	“It’s warm” if it’s between 15 and 30
// 	•	“It’s hot” if it’s above 30
// Create a function that takes a username and password.
// 	•	If either one is empty → show “Please fill all fields”
// 	•	If username is “admin” and password is “1234” → show “Login successful”
// 	•	Else → “Invalid credentials”


// .Create a function that takes age and alerts:
// 	•	“Child” if age is below 13
// 	•	“Teenager” if age is 13–19
//       . “Adult” if age is 20+

// let age = (person)=>{
// person = parseInt(prompt("Enter your Age"))
// if(person < 13){
//     alert(`${person} is a child`)
// }
// else if(person >=13 && person <= 19){
//     alert(`${person} is a teenager`)
// }
// else  if(person >=20){
//     alert(`${person} is an adult`)
// }
// else{
//     alert("Enter a valid age")
// }
// }
// age()


// /   Write a function that takes a password and checks:
// 	•	If it’s empty → “Password is required”
// 	•	If it’s less than 6 characters → “Password is too short”
// 	•	Else → “Password is strong”

// let password= (setPassword)=>{
// setPassword=prompt("Enter your password")

// if(setPassword===""){
//     alert("Password is required")
// }
// else if(setPassword.length < 6){
//     alert("Password is too short")
// }
// else{
//     alert("Password is strong")
// }
// }
// password()

// Write a function that takes a temperature value and:
// 	•	Says “It’s cold” if it’s below 15
// 	•	“It’s warm” if it’s between 15 and 30
// 	•	“It’s hot” if it’s above 30 Write 

// let temperature = (weather)=>{
// weather =parseInt(prompt("check weather"))

// if(weather < 15){
//     alert(`${weather} is cold`)
// }else if(weather >= 15 && weather <= 30 ){ alert(`${weather} is warm`)}else if(weather > 30){
//     alert(`${weather} is hot`)
// }else{
//     alert("This is invalid")
// }
// }
// temperature()

// Create a function that takes a username and password.
// 	•	If either one is empty → show “Please fill all fields”
// 	•	If username is “admin” and password is “1234” → show “Login successful”
// 	•	Else → “Invalid credentials”

// let userDetails =(userName,password)=>{
// userName=  prompt("Enter your username")
// password= prompt("Enter your password")
// if(userName ==="" && password ===""){
//     alert("Please fill all fields")
// }else if(userName==="Admin" && password=== "1234"){
//     alert("Login successful")
// }else{
//     alert("Invalid credentials")
// }
// }
// userDetails()

// for(let i=0; i < 10; i++){
//     console.log('This is the value of i',i)
// }

// for(let startingIndex =1; startingIndex < 50; startingIndex ++){
//     if(startingIndex % 2=== 0){
//      console.log(startingIndex, "is an even number")
//     }else{
//    console.log(startingIndex, "is an odd number")
// }}

// for(let j = 5; j <= 20; j++){
//     console.log("This is the value of j", j)
// }

// let score =[1,2,3,4,5,6,7,8,9,10]

// for(let z = 0; z < 10; z ++ ){
//     console.log("score=",score[z])
// }


// // let calculate = 5*1
// // for(let y = 1; y <=12; y++){
//console.log("calculate=" calculate*y) }
 
// 


// for(let u = 1;  u <= 50; u++){
//     console.log(u)
// }

console.log(document.getElementsByClassName('container'))

console.log(document.getElementsByClassName('text')[0])

console.log(document.getElementById('header').innerText)

console.log(document.getElementsByClassName('btn'))

let student ={
    name:"Toyosi",
    age: 16,
    gender:"female"
}
console.log(document.querySelectorAll('li')[2].innerHTML="i have been changed by javascript")

console.log(document.querySelectorAll('li')[3].textContent="GARRI")



const message = document.getElementsByClassName('highlight')
for(let i =0; i < message.length; i++){
    let text = message[i].textContent;
    if(text.includes('important')){
        message[i].style.backgroundColor="yellow";
    }
    else{
        message[i].style.backgroundColor="lightgray"
    }

}

console.log(document.getElementById('first'))
