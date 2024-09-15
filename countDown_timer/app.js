let newContainer = document.querySelector(".newContainer");
let input=document.querySelectorAll("input");
let submit = document.querySelector("#submit");

let count=document.querySelector("#count");

let lastDate="";
let lastTime="";
let enddate=0;
let startdate=0;
let x;


let now;
let distanceCovered;
let coveredWidthInPercentage;

let reset = document.querySelector("#reset");
let progress=document.querySelector("#progress");

let blueProgress = document.querySelector(".progress-bar");

submit.addEventListener("click",function () {
  if(input[0].value==="" || input[1].value===""){
    alert("Please Enter The Date To Set Timer.");
  }
  else{
    console.log(input[0].value);
    lastDate=input[0].value;
    lastTime=input[1].value;
    newContainer.style.display="none";
    enddate = new Date(`${lastDate} ${lastTime}`).getTime();
    startdate = new Date().getTime();

   count.innerText=`Timer Setted For ${lastDate} at ${lastTime} .`;
   count.style.fontSize="large";

    x=setInterval(update,1000);
   
    reset.addEventListener("click",reset2);
  
  }

  if(progress.childNodes[1]){
    progress.childNodes[1].remove();
   
   
  }
});




function reset2(){
  newContainer.style.display="block";
  enddate=0;
  startdate=0;
  input[0].value="";
  input[1].value="";
  clearInterval(x);
  allZero();
  
  if(progress.childNodes[1]){
    progress.childNodes[1].remove();
   
   
  }
  blueProgress.style.width=`0%`;
  count.innerText=`CountDown Timer`; 
  count.style.fontSize="xx-large";
  document.querySelector(".container").style.backgroundColor="black";
}




function allZero(){
  document.querySelector(".days").innerText="00";
      document.querySelector(".hours").innerText="00";
      document.querySelector(".minutes").innerText="00";
      document.querySelector(".seconds").innerText="00";
}





function  update(){
 now = new Date().getTime();           //---------> current (ongoing time).



  distanceCovered = now-startdate;
  let pendingTime = enddate-now;

  let totalDays=Math.floor(pendingTime/(24*60*60*1000));                  //------> 1 day = (24*60*60*1000) (coz time is in milliseconds)
  let totalHours = Math.floor((pendingTime%(24*60*60*1000))/(60*60*1000));      // to get only hours we have to remove no. of days so we use "%" operator.
  let totalMinutes =Math.floor((pendingTime%(60*60*1000))/(60*1000));
  let totalSecond=Math.floor((pendingTime%(60*1000))/(1000));

  // console.log(totalDays);
  // console.log(totalHours);
  // console.log(totalMinutes);
  // console.log(totalSecond);

  document.querySelector(".days").innerText=totalDays;
  document.querySelector(".hours").innerText=totalHours;
  document.querySelector(".minutes").innerText=totalMinutes;
  document.querySelector(".seconds").innerText=totalSecond;



   // progress bar:-
    // console.log(distanceCovered);
    // console.log(now);
    coveredWidthInPercentage=Math.floor((distanceCovered/(enddate-startdate)*100));          // percentage = obtain/total * 100;
    blueProgress.style.width=`${coveredWidthInPercentage}%`;


      if(pendingTime<0){
        clearInterval(x);
        // document.querySelector(".countdown").style.display="none";
        allZero();
        let element = document.createElement("div");
        element.innerHTML="</br> Expired!";
        progress.appendChild(element);
        blueProgress.style.width=`100%`;

        document.querySelector(".container").style.backgroundColor="red";
      }

 
     
}