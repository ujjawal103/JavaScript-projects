// winning pattern:- "0 1 2" , "3 4 5", " 6 7 8 ", " 0 3 6" ," 1 4 7" , " 2 5 8", "0 4 8" " 2 4 6"; as per indexes of a 2D array box (horizontally + vertically + diagonally ) if any pattern matches any one player won the match.

let boxes=document.querySelectorAll(".box");    // returns collection.
let reset=document.querySelector(".reset");

let resetValue=true;

let turnOfO=true;                             // there are two players Player "O", and Player "X" ;     --------> here 1st turn to player 0.


let msgContainer=document.querySelector(".msg-container");
let newGame=document.querySelector(".newGame");
let msg=document.querySelector("#msg");





const winningPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

for(let box of boxes){                                     
  box.addEventListener("click", function(){               
    // console.log("box was clicked");  
    if(turnOfO==true){
      box.innerText="O"; 
      turnOfO=false;                         
    }  
    else{
      box.innerText="X"; 
      turnOfO=true;                                // after each click on button turn of players change
    } 
      box.disabled=true;                           // after click on a button it will not clickable for this round.   
      
      checkWinner();
  });                                                    
}                                                  


                                                                                //  boxes.forEach((box)=>{
                                                                                //    box.addEventListener("click", ()=>{
                                                   //or                         //      console.log("button was clicked");
                                                                                //    });
                                                                                //  });




           function disableBoxes(){
            for(let box of boxes){                 //disabling all buttons when winner win the game
              box.disabled=true;
              box.innerText="";                   // again set to empty values of each box.
            }
           }

          
           function showWinner(winner){
              msg.innerText=`Congratulations, Winner is player "${winner}"`;
              msgContainer.classList.remove("hide");                               // showing who is winner.
              disableBoxes();

              resetValue=false;

              if(resetValue==false){
                reset.classList.add("hide");
               }
           }
        










        function checkWinner(){
          for(let pattern of winningPatterns){                   // on one and each click at any button it will check for all patterns to win
                                                                                                                          // console.log(pattern[0] , pattern[1] , pattern[2]);                           // accessing all values not in a array to get the (all posiible index) for all pattern array.(not in a sequence like ----> 0 1 2 , 0 1 2 , 0 1 2)
                                                                                                                         // console.log(boxes[pattern[0]] , boxes[pattern[1]] , boxes[pattern[2]]);      /// ex:- pattern[0]= 1st value of pattern array. , pattern[0]= 2nd value of pattern array. , pattern[2]= 3rd value of pattern array. and boxes is also a collection Hence all 3 elements(buttons ) are accessed. for each pattern array (all posible winning arrays)
            
                                                                                                                         // console.log(boxes[pattern[0]].innerText , boxes[pattern[1]].innerText , boxes[pattern[2]].innerText);     // finally aceesed the value in the element for the possible  winning patters in pattern array for each.
          
          
               let position1Value=boxes[pattern[0]].innerText;
               let position2Value=boxes[pattern[1]].innerText;                 // these three posituions are actually what? -------> these are the values(text) on ecah possible winner pattern; ex: for 0 1 2 ---> if ( O O O) then all values at different positions are same means pattern matched and winner announced.
               let position3Value=boxes[pattern[2]].innerText;

               if(position1Value!="" && position2Value!="" && position3Value!=""){        // make sure at time of checking winner all the buttons are with value.
                   if(position1Value==position2Value && position2Value==position3Value){
                    
                   
                     
                    showWinner(position1Value);
                    resetValue=false;


                   }
                  
               }
                        
             
                
          
          
          
          
          
          }
        

        }                                                                        



        function enableBoxes(){
          for(let box of boxes){                 //enabling all buttons when reset the game
            box.disabled=false;
            box.innerText="";
          }
         }


        function resetGame(){
              turnOfO=true;
              enableBoxes();
              msgContainer.classList.add("hide");

              reset.classList.remove("hide");
              
             
        }

        if(resetValue==true){
         
          reset.addEventListener("click",resetGame);
         
        }
       
        newGame.addEventListener("click",resetGame);    // also applicable for new game button


        
        