// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);

// const id = urlParams.get('id');
// const name = urlParams.get('name');

// console.log(id, name);
 
const getData = async () => {
  const response = await fetch("https://api.tvmaze.com/shows");

  const json = await response.json();

    console.log(json);

  return json;
};



const renderList = (data, page) => {

  for (let i = (page-1)*10; i < page * 10; i++) {
    const element = data[i];

    const list=document.querySelector(".highest-rating-scrole")

    list.innerHTML += `<a href="details.html?id=${element.id}" class="movie-context">
            
              <img src="${element.image.original}" alt="" />
               <div class="movie-context-pointed">
              <h3>${element.name}</h3>
               <p>Rating : ${element.rating.average}</p>
              </div>
           
            </a>
  `;
}
};

const data = await getData();


const loadMoreBtn=document.querySelector(".load-more-btn");

let currentPage=1;

loadMoreBtn.addEventListener("click",()=>{
  currentPage++;
  renderList(data,currentPage)
})

renderList(data, currentPage);