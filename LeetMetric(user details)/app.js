document.addEventListener("DOMContentLoaded", function (){
  
  const searchButton = document.querySelector("#search-btn");
  const usernameInput = document.querySelector("#user-input");
  const statsContainer = document.querySelector(".stats-container");
  const easyProgressCircle= document.querySelector(".easy-progress");
  const mediumProgressCircle = document.querySelector(".medium-progress");
  const hardProgressCircle = document.querySelector(".hard-progress");
  // const easyLabel= document.querySelector("#easy-label");
  // const mediumLabel= document.querySelector("#medium-label");
  // const hardLabel= document.querySelector("#hard-label");

  const eachProgress = document.querySelectorAll(".progress-item");

  const cardStatsContainer = document.querySelector(".stats-card");

  const toAddProgress = document.querySelector(".progress");




  let acceptanceRate=``;
  let rank=``;
  let totalSolved=``;
  //__________________________________________________________________________________________


 // checking username is correct or not.
     function validateUsername(username){
      if(username.trim()===""){
        alert("please ! enter a valid lettcode userName");
        return false;
      }
      
        const regex=  /^(?=.{4,15}$)[a-z0-9_]+$/; // to check the correct format of username according to the leet code (by chatGpt)
        const isMatching = regex.test(username);
        if(!isMatching){
          alert("Enter a Valid UserName:");
        }
        return isMatching;
     
     }

     // fetching details of username.
       
     async function fetchUserDetails(username) {
       const URL = `https://leetcode-stats-api.herokuapp.com/${username}`;
         try{

          searchButton.textContent ="searching..";
          searchButton.disabled=true;
          
          const response = await fetch(URL);
          if(!response.ok){
            throw new Error("Unable To fetch User Details");
            
          }
          const data = await response.json();
          console.log("Logging Data: ",data);

          displayUserData(data);
         }
         catch(err){
            statsContainer.innerHTML=`<p>We are sorry! </p> </br> ${err}`;
            statsContainer.style=`font-size: xx-large; color:red; `;

         }
         finally{
          searchButton.textContent ="search";
          searchButton.disabled=false;

         }
     }



     function displayUserData(data){

      if(data.message===`user does not exist`){
        statsContainer.innerHTML=`<p>Data Not Found! </p> </br> ${data.message}`;
        
        statsContainer.style=`font-size: xx-large; color:red; `;
      }  
      else{
        statsContainer.style.color="white";
        statsContainer.style.fontSize="medium";
        easyProgressCircle.innerHTML=`${data.easySolved}/${data.totalEasy} </br> Easy`;
        mediumProgressCircle.innerHTML=`${data.mediumSolved}/${data.totalMedium} </br> Medium`;
        hardProgressCircle.innerHTML=`${data.hardSolved}/${data.totalHard}  </br> Hard`;
        
        progress(data);
        otherInfo(data);


      }
      
     }

     function progress(data){
       let easyPercent = `${(data.easySolved/data.totalEasy)*100}%`;
       eachProgress[0].style= `background: conic-gradient(rgb(98, 165, 158) var(--progress-degree, ${easyPercent}),rgb(111, 71, 119) 0%)`;

       let mediumPercent = `${(data.mediumSolved/data.totalMedium)*100}%`;
       eachProgress[1].style= `background: conic-gradient(rgb(98, 165, 158) var(--progress-degree, ${mediumPercent}),rgb(111, 71, 119) 0%)`;

       let hardPercent = `${(data.hardSolved/data.totalHard)*100}%`;
       eachProgress[2].style= `background: conic-gradient(rgb(98, 165, 158) var(--progress-degree, ${hardPercent}),rgb(111, 71, 119) 0%)`;
     }

     function otherInfo(data){
      cardStatsContainer.classList.add("unhide");

        totalSolved = document.createElement("div");
        totalSolved.innerHTML=`Total Solved : ${data.totalSolved}/${data.totalQuestions}`;
        totalSolved.style.width="100%";

        rank = document.createElement("div");
        rank.innerHTML=`Ranking : ${data.ranking}`;

        acceptanceRate=document.createElement("div");
        acceptanceRate.innerHTML=`acceptanceRate : ${data.acceptanceRate}`;

        acceptanceRate.classList.add("design");
        rank .classList.add("design");
        totalSolved.classList.add("design");

        cardStatsContainer.appendChild(totalSolved);
        cardStatsContainer.appendChild(rank);
        cardStatsContainer.appendChild(acceptanceRate);

        
     }


     function againStart(){
      easyProgressCircle.innerHTML=`Easy`;
      mediumProgressCircle.innerHTML=`Medium`;
      hardProgressCircle.innerHTML=`Hard`;
      
      if(totalSolved || rank || acceptanceRate){
        totalSolved.remove();
        rank.remove();
        acceptanceRate.remove();
      }
      
      
      statsContainer.innerHTML=``;
      statsContainer.appendChild(toAddProgress);

      statsContainer.appendChild(cardStatsContainer);

     }

      searchButton.addEventListener("click", function(){

        againStart();
        const userName = usernameInput.value;
        // console.log(userName);
        if(validateUsername(userName)){
                fetchUserDetails(userName);  
        }


      });
});