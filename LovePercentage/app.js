const you=document.querySelector("#you");
const icon=document.querySelector("i");
const crush=document.querySelector("#crush");
const lengthPass = document.querySelector("#length");

const buttons = document.querySelectorAll("button");

const pass = document.querySelector(".pass");

const heart = document.querySelector("#password");
const btn1 = document.querySelector("#generate");
const btn2 = document.querySelector("#regenerate");

const toon = document.querySelector("#toon");

let percent=20;

for(let button of buttons){
    button.addEventListener("click", function (){
     if(!(you.value)){
        alert("Please Enter Your Name.");
     }
     else{
        if(!(crush.value)){
            alert("Crush Kon hai Tera.");
        }
        else{
            icon.style=`color: greenyellow`;
           
           toon.classList.remove("hide");  
           findPercentage();
        }
     }
    })
}

function  findPercentage(){

   let x= setInterval(function(){
         percent=Math.floor(Math.random()*80)+20;
        pass.innerText=`${percent}%`;

        if(percent<40){
            toon.src="images/breakUp.png" ;
          }
          else if(percent>40 && percent<60){
              toon.src="images/love.png";
          }
          else if(percent>60 && percent<80){
              toon.src="images/hugs.png" ;
          }
          else{
              toon.src="images/kiss.png" ;
          }
    },100);

    setTimeout(()=>{
        clearInterval(x);
        // if(percent<40){
        //   toon.src="images/breakUp.png" ;
        // }
        // else if(percent>40 && percent<60){
        //     toon.src="images/love.png";
        // }
        // else if(percent>60 && percent<80){
        //     toon.src="images/hugs.png" ;
        // }
        // else{
        //     toon.src="images/kiss.png" ;
        // }
    },3000);
  

    heart.classList.remove("hide");
    btn2.classList.remove("hide");
    btn1.classList.add("hide");




}