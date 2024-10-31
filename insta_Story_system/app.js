let reel = document.querySelector(".reel");
let video = document.querySelector(".video");
let middleHeart = document.querySelectorAll(".heart");

let actualVideo = document.querySelector("video");
let volume = document.querySelector(".volume");

let like = document.querySelector(".red");

let CurrentLikes = Math.floor(Math.random()*78455);
let howMuchLike = document.querySelector(".howMuch");
howMuchLike.innerHTML=`${CurrentLikes}  likes`;

function likeCount(){
    if(flag==true){
        howMuchLike.innerHTML=`${++CurrentLikes}  likes`;
    }
    else{
        howMuchLike.innerHTML=`${--CurrentLikes}  likes`;
    }
}

let flag = false;
let onceOndblClick = false;



function red(){
   if(flag == false){
    like.style.color= "red";
    flag=true;
    onceOndblClick=true;
    likeCount();
   }
   else{
    like.style.color= "white";
    flag=false;
    onceOndblClick=false;
    likeCount();
   }
  
}
like.addEventListener("click",function () {
    red();
})


let toCheck;



let doubleClick = false;


(reel || video ).addEventListener("dblclick",function (event) {

    doubleClick = true;

    // event.stopPropagation(); // prevent click event from being triggered
    // event.preventDefault(); 

    clearTimeout(toCheck);
    
    middleHeart[0].style = `transform: translate(-50% , -50%) scale(1.2);`;
    middleHeart[0].style.opacity=0.8;
   
    setTimeout(()=>{
        middleHeart[0].style = `transform: translate(-50% , -50%) scale(0);`;
    },1600)

    setTimeout(()=>{
        middleHeart[0].style = `transform: translate(-50% , -50%) scale(0);`;
        middleHeart[0].style.opacity=0;    
    },1200)


    if(onceOndblClick==false){
        red();
        onceOndblClick=true;
    }
  
    
})

volume.addEventListener("click" , function () {
    if (actualVideo.muted) {
        actualVideo.muted = false;
        volume.style.display = "none";


        
       
    }
      
})


video.addEventListener("click",function () {

    if (doubleClick) {
        doubleClick = false; // reset the flag
        return; // exit the function
    }
    
    
    toCheck =  setTimeout((event)=>{
    if (!(actualVideo.muted)) {
     
            actualVideo.muted = true;
        volume.style.display = "block";

        // middleHeart[1].style.fontSize=`3rem`;
        middleHeart[1].style = `transform: translate(-50% , -50%) scale(1.05);`;
        middleHeart[1].style.opacity=0.8;
        middleHeart[1].style.backgroundColor=`rgb(40, 38, 60)`;
        middleHeart[1].style.borderRadius=`50%`;
        middleHeart[1].style.padding=`10px`;
      

   
    setTimeout(()=>{
        middleHeart[1].style = `transform: translate(-50% , -50%) scale(0);`;
    },1600)

    setTimeout(()=>{
        middleHeart[1].style = `transform: translate(-50% , -50%) scale(0);`;
        middleHeart[1].style.opacity=0;    
    },1200)
      
       

         
    }
},250);
})


