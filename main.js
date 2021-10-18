

document.addEventListener("DOMContentLoaded",function(){

document.querySelector("form").onsubmit=function(){

fetch("https://api.exchangerate.host/latest?base=USD")
.then((Response)=>Response.json()).then((data)=>{

const curr = document.querySelector("#cur").value.uppercase;

console.log(data.rates);
 

const rat = data.rates[curr];
console.log(rat);

document.querySelector("#result").innerHTML = ` 1 usd is equal ${rat} ${curr} `;

// if(rat == undefined){

// document.querySelector("#result").innerHTML = ` 1 usd is equal ${rat} ${curr} `;
// }else{
//     document.querySelector("#result").innerHTML = `invalid`;
// }

    














})
// .catch(error =>{
//      console.log("error")
//  });


return false;
};






})