// let stone=document.querySelector(".stone");
// let paper=document.querySelector(".paper");
// let scissor=document.querySelector(".scissor");

let buttons = document.querySelectorAll(".square");
let result= document.querySelector(".result");

let score= document.querySelector(".score");

let userScore=0;
let comptScore=0;

let inputs=["stone" , "paper", "scissor"];


function playerScore(){
    userScore++;
    if(userScore<10)
     score.children[0].innerText=`Player score: 0${userScore}`
    else
    score.children[0].innerText=`Player score: ${userScore}`
}
function computerScore(){
    comptScore++;
    if(userScore<10)
     score.children[1].innerText=`Computer score: 0${comptScore}`
    else
     score.children[1].innerText=`Computer score: ${comptScore}`
}


function checkwinner(computer , player){
  if(computer === player){
   result.children[0].innerText="Match DRAW!";
   result.classList.add("draw");
   result.classList.remove("winner");
   result.classList.remove("looser");
   result.classList.remove("default");
  }
  else 
  {
    result.classList.remove("draw");
    result.classList.remove("default");
    if(computer =="stone" && player=="paper"){
    result.children[0].innerText="Paper Beats Stone";
    result.classList.add("winner");
    result.classList.remove("looser");
    playerScore();
   } else if(computer =="stone" && player=="scissor"){
    result.children[0].innerText="Stone Beats Scissor";
    result.classList.add("looser");
    result.classList.remove("winner");
    computerScore();
   } else if(computer =="paper" && player=="scissor"){
    result.children[0].innerText="Scissor Beats Paper";
    result.classList.add("winner");
    result.classList.remove("looser");
    playerScore();
   } else if(computer =="paper" && player=="stone"){
    result.children[0].innerText="Paper Beats Stone";
    result.classList.add("looser");
    result.classList.remove("winner");
    computerScore();
   }else if(computer =="scissor" && player=="paper"){
    result.children[0].innerText="Scissor Beats Paper";
    result.classList.add("looser");
    result.classList.remove("winner");
    computerScore();
   } else if(computer =="scissor" && player=="stone"){
    result.children[0].innerText="Stone Beats Scissor";
    result.classList.add("winner");
    result.classList.remove("looser");
    playerScore();
   }
}

  regenerateCompt();
}


function regenerateCompt(){

  


    comptChoice=Math.floor(Math.random()*3);
    compt=inputs[comptChoice];
    
    console.log(compt);

  

   setTimeout(function (){
    result.classList.remove("draw");
    result.classList.remove("winner");
    result.classList.remove("looser");
    result.classList.add("default");
    result.children[0].innerText="Computer has been choosen , select yours!";
    // buttonEnable();
   },1200);
}



function buttonDisable(){
    for( let button of buttons){
        buttons.disabled=true;
       }
}
                                                                //disabling button is not working.----------why?
function buttonEnable(){
    for( let button of buttons){
       
            button.disabled=false;
         
       }
}





// computer turns.

let comptChoice=Math.floor(Math.random()*3);
let compt=inputs[comptChoice];

console.log(compt);




                                              

// player turns.
                                                                                 // console.log(buttons[2].children[0].classList[1]);
    
   for(let button of buttons){
    button.addEventListener("click",function (){
       let player=`${this.classList[1]}`;
        console.log(player);

        // buttonDisable();

        checkwinner(compt,player);
    });
   }

  

// 

