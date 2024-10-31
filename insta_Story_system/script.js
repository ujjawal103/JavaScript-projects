let commentSection = document.querySelector(".comment");
let commentBtn = document.querySelector(".comments");

let display=true;
commentBtn.addEventListener("click",function () {
   if(display == true){
    commentSection.style.display="block";
    commentSection.style=` display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;`;
    display=false;
   }else{
    display=true;
    commentSection.style.display="none";
   }
})


//_____________________________________________________________________________________________________________

let storiesBox = document.querySelector(".stories");

let arr = [
   {
   dp:"https://images.unsplash.com/photo-1665832103834-2c89f220564e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3V0ZSUyMGdpcmxzfGVufDB8fDB8fHww",
   story:"https://images.unsplash.com/photo-1665832104055-80bdbf6e3dfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3V0ZSUyMGdpcmxzfGVufDB8fDB8fHww"
},
{
   dp:"https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGdpcmxzJTIwbW9kZWxzfGVufDB8fDB8fHww",
   story:"https://images.unsplash.com/photo-1566802725767-890e3f6e69b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGdpcmxzJTIwbW9kZWxzfGVufDB8fDB8fHww"
},
{
   dp:"https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1dGUlMjBnaXJscyUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
   story:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGN1dGUlMjBnaXJscyUyMG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
},
{
   dp:"https://images.unsplash.com/photo-1586866628184-e07bda20abaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3V0ZSUyMGdpcmxzJTIwbW9kZWxzJTIwaW5kaWFuc3xlbnwwfHwwfHx8MA%3D%3D",
   story:"https://images.unsplash.com/photo-1723218628337-df1bd8e87bf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3V0ZSUyMGdpcmxzJTIwbW9kZWxzJTIwaW5kaWFuc3xlbnwwfHwwfHx8MA%3D%3D"
},
{
   dp:"https://images.unsplash.com/photo-1726741691592-f2821115d4a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1dGUlMjBnaXJscyUyMG1vZGVscyUyMGluZGlhbnN8ZW58MHx8MHx8fDA%3D",
   story:"https://images.unsplash.com/photo-1601698791212-36341abb5cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN1dGUlMjBnaXJscyUyMG1vZGVscyUyMGluZGlhbnN8ZW58MHx8MHx8fDA%3D"
},
{
   dp:"https://images.unsplash.com/photo-1726741695313-41526fc8fe5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGdpcmxzJTIwbW9kZWxzJTIwaW5kaWFuc3xlbnwwfHwwfHx8MA%3D%3D",
   story:"https://images.unsplash.com/photo-1725571712202-73d2a270d4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3V0ZSUyMGdpcmxzJTIwbW9kZWxzJTIwaW5kaWFuc3xlbnwwfHwwfHx8MA%3D%3D"
},
{
   dp:"https://media.istockphoto.com/id/1287865689/photo/beautiful-woman-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=9tcsHBo-q8MyBens0qFO_sYdoaao8Ji7Kov_7Jxzv88=",
   story:"https://images.unsplash.com/photo-1695764062673-ca63e7a6f4ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1dGUlMjBnaXJscyUyMG1vZGVscyUyMGluZGlhbnN8ZW58MHx8MHx8fDA%3D"
}

]


let allStory = "";

arr.forEach((item , idx) =>{
   allStory+=`<div class="circle">
                <img src=${item.dp} alt="" id="${idx}">  
            </div>`;                                           //id is giving to identify each story
})
storiesBox.innerHTML=allStory;

storiesBox.addEventListener("click", function (event) {
   document.querySelector(".full-Screen-Story").style.display=`block`;
   document.querySelector(".full-Screen-Story").style.backgroundImage=`url(${arr[event.target.id].story})`;

   setTimeout(()=>{
      document.querySelector(".full-Screen-Story").style.display=`none`;

   },3000);
  

})


