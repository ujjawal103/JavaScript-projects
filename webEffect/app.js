let boxes = document.querySelectorAll(".box");
img = document.querySelectorAll(".box img");
// img.style.left=`${800}px`;
for(let box of boxes){
    
    box.addEventListener("mousemove",function (event) {
        
       box.childNodes[2].style.left=`${event.x}px`;
       if( box.textContent!=='bachhi 4\n    '){
        box.childNodes[2].style.top=`${event.y - 300}px`;
       }
       else{
        box.childNodes[2].style.top=`${event.y - 500}px`;
       }
       
       box.childNodes[2].style.transition=`none`;
       box.childNodes[2].style.opacity=1;
        
    })
    box.addEventListener("mouseleave",function(event){
        box.childNodes[2].style.left=`${10}px`;
        box.childNodes[2].style.transition=`all ease-in 0.2s`;
        box.childNodes[2].style.opacity=0;
    })
}