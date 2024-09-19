const you=document.querySelector("#you");
const icon=document.querySelector("i");
const crush=document.querySelector("#crush");
const lengthPass = document.querySelector("#length");

const buttons = document.querySelectorAll("button");

const pass = document.querySelector(".pass");

const heart = document.querySelector("#password");
const btn1 = document.querySelector("#generate");
const btn2 = document.querySelector("#regenerate");

let passLength = 8;

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
            let first=`${you.value}`;
            let second=`${crush.value}`;

            if(parseInt(lengthPass.value)>15 || parseInt(lengthPass.value)<8){
                 passLength = 7;
            }else{
                passLength = lengthPass.value;
            }

            findPassword(first,second,passLength);
        }
     }
    })
}

function  findPassword(first,second,passLength){
    // let firstLen=first.length;
    // let secondLen = second.length;

    let bothName = [first,second];
    

    let result="";

    

    for(let i=0 ; i<=passLength ; i++){
        let random1=Math.floor(Math.random()*2);     // select from whom.


        let random2=Math.floor(Math.random()*10);        // for adding numbers to make strong.
        let toStrong=Math.floor(Math.random()*10);
        
        let fromName = Math.floor(Math.random()*bothName[random1].length); // add from whom.

        let letter="";
        if(i==0){
            letter = bothName[random1][0];
            let firstLetter=letter;
            result+=firstLetter; 
        } 
        else if(random2===toStrong){
            result+=random2;
        }
        else{
            let letter=bothName[random1][fromName];
            result+=letter;
        }
        
       
        
    }
   let finalPassword = result.replace(`${result[0]}`,`${result[0].toUpperCase()}`);
    // console.log(finalPassword);

    pass.innerText=finalPassword;

    heart.classList.remove("hide");
    btn2.classList.remove("hide");
    btn1.classList.add("hide");


}