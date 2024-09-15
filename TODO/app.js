let input= document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");








btn.addEventListener("click", function() {
    if (input.value == "") {
        alert("Please enter the task!");
    } else {
        let item = document.createElement("li");
        item.innerText = input.value;

        let delBtn=document.createElement("button");
        delBtn.innerText="remove";
        delBtn.classList.add("delete");



        ul.appendChild(item);  // Add the item inside the ul
        item.appendChild(delBtn);
    }

    input.value = "";  // After adding a task, the input is cleared
});



       // deleting element(li)


                                                                             //--------------------------------------------------------------------------------------------------
                                                                                                 //     let deleteButton=document.querySelectorAll(".delete");
                                                                                                 //     for( let btn of deleteButton){
                                                                                                 //       btn.addEventListener("click" , function (){ 
                                                                                                 //       console.log(this);                                
                                                                                                 //       });
                                                                                                 //   }
                                                                             //--------------------------------------------------------------------------------------------------

                                                                            // but till now remove wala code work upon existing li (if any) when we add a new li using event listener its does not work.
                                                                            
                                                                                        // And if we want to work our event listener on same created elements use-------> Event Delegation.(by using the concept of Event bubbling).
                                                                                        // HOW?
                                                                            
                                                                                           // just add the event listner to the parent or the last parent directly not to child (like here button(".delete")) is a child element of li & li is a child of ul.
                                                                            
                                                                            
                                                                            
                                                                            
                                                                                         
                                                                             //--------------------------------------------------------------------------------------------------  
                                                                                            //  ul.addEventListener("click" , function (){ 
                                                                                            //  console.log(this);                                
                                                                                            //  });
                                                                            //-------------------------------------------------------------------------------------------------- 
                                                                                                    // how it is working:-
                                                                                                         // actually event argument has a target function that tells due to which element of parent (ul)  eventListener works . //magic
                                                                            
                                                                            
                                                                                    //  ul.addEventListener("click" , function ( event ){ 
                                                                                                                                                                    
                                                                                    //     console.log(event.target);    
                                                                                    //     console.dir(event.target.nodeName);   // a property in tartget which tells which element is actually triggers the event Listner like button or paragraph or heading.  // like here button element actually trigers the event listeners.
                                                                                    //     console.log("button clicked");                              
                                                                                    // });
//--------------------------------------------------------------------------------------------------  
                

//NOTE:- as we are using eventListner on ul then our elent listner works for all childs like button as well as li.
    // But here we want on click button it will delete not on li.

  ul.addEventListener("click" , function ( event ){ 
            
    if(event.target.nodeName=="BUTTON") {
        let delListItem = event.target.parentElement;  // coz----> event.target is Actual button for each.
        // console.log(delListItem);
        delListItem.remove();
        console.log("delete");
    }  
                          
 });
























