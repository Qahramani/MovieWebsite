
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const getDetailedData = async () => {
try{
  const id = urlParams.get("id");
  console.log(id)

  const response = await fetch(
    `https://api.tvmaze.com/shows/${id}`
  );

  const json = await response.json();

  const output=document.querySelector(".details-container")


  output.innerHTML=
  `
  <div class="img-div">
          <img src="${json.image.original}" alt="">
        </div>
        <div class="info-container">
        <div class="details-div"> 
                <h3 class="name-text">${json.name}</h3>
                <p class="lang-text">Language : ${json.language}</p>
                <p class="rating-text">Rating : ${json.rating.average}</p>
                <p class="duration-text">Runtime: ${json.runtime}minutes</p>
                <p class="sescrb-text"><b>Description :  ${json.summary}</p>
             </div> 
             <button class="play-btn">Play</button>
             <button class="watch-later-btn">Watch later</button>
         
        </div>
        `;

  console.log(json);

}catch(e){
  // alert("Data tapilmadi")
  window.location.href = "error.html";
}

};

getDetailedData();