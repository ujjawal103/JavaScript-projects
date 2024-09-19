let box = document.querySelector(".box");

let timer =  60;
let newHit=Math.floor(Math.random()*10);
document.querySelector("#hit").innerText=newHit;
let score=0;
 



function makeBubble(){
    let allBubble="";

for(let i=0 ; i< 207; i++){
    let rn = Math.floor(Math.random()*10);
    allBubble+=` <div class="bubble">${rn}</div> `;
}
box.innerHTML=allBubble;

}

function timerRun(){
  let x =  setInterval(()=>{
        if(timer>0){
            timer = timer - 1;
            document.querySelector("#timer").textContent=`${timer}`;
        }
        else{
           
            
            
            let i=3;
            box.style="color:black;font-size:larger; display:flex;flex-direction:column; justify-content:center; align-items: center;margin:140px"
            box.innerHTML=`<h1> !! Game Over !! </br> Earned Score is : ${score} </h1> <p> New Game starts in ${i} </p> `;
            let y = setInterval(()=>{
                if(i>0){
                    i--;
                     box.style="color:black;font-size:larger; display:flex;flex-direction:column; justify-content:center; align-items: center;margin:140px"
                    box.innerHTML=`<h1> !! Game Over !! </br> Earned Score is : ${score} </h1> <p> New Game starts in ${i} </p> `;
                    
                }
            },1000);
           
            setTimeout(()=>{
              
                clearInterval(y);
                reset();
                
            },4000);
            clearInterval(x);
          
        }
    },1000);
}





function changeHit(){
    newHit=Math.floor(Math.random()*10);
    document.querySelector("#hit").innerText=newHit;
}




function updateScore(){
   score+=10;

   document.querySelector("#score").textContent=score;
}




function reset(){
   box.style="color:black;font-size:larger; display:flex; justify-content:center; align-items: center;margin:0px"
    score=0;
       document.querySelector("#score").textContent=score;
    timer = 60;
    timerRun();
    makeBubble();
}


setTimeout(()=>{
    reset();
    
},500)












// bubbling on event listener (adding event listner directly to parent not to each bubbles)

box.addEventListener("click",function (button) {
    let pressedBtn = button.target.textContent;         //button.target ----------> return that nade which is pressed. (that how we achieve the event listner without using for loop)
    pressedBtn = Number(button.target.textContent);     // now it will not return a string value
    console.log(pressedBtn);

    if(pressedBtn === newHit){

        updateScore();
        changeHit();
        makeBubble();

    }
    else{
      
        
        
       
        timer=0;


    }
})







