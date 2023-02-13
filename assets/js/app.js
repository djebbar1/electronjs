
const container = document.getElementById('container');
const div = document.getElementById('movies');

let data = [];
let search = document.getElementById('search');
const sub = document.getElementById('sub');
let searchTerm = "";
//const form = document.getElementById('form');
function createNode(element) {
	return document.createElement(element);
}
function append(parent, el) {
	return parent.appendChild(el);
}

const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=6eb686ce381d7a58252a49f23e82b65f"

async function getMovies(){
  
  data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6eb686ce381d7a58252a49f23e82b65f&query=${searchTerm}`).then((res) =>res.json());
    console.log(data);
}


fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let movies = data.results;
    return movies.map(function(movie) {
        
        let card = createNode('div');
        let img = createNode('img');
        let h5 = createNode('h5');
        let span = createNode('span');
        let p = createNode('p');

        img.src = movie.poster_path;
        card.setAttribute("class", "democlass"); 
    
        const getPosterURL = (movies) =>{
        return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
        }
        
      function convertDate(dateString){
        let p = dateString.split(/\D/g)
        return [p[2],p[1],p[0] ].join("-")
        }
        

  function getColor(vote_average){
    if(vote_average>8){
        return "green" 

    }else if(vote_average){
        return "orange"  
    }else{
        return "red"  
    }
}
        card.innerHTML = '<div id="movies" class="card mb-5" style="width: 18rem;">' + 
        `<img id="img" src=${getPosterURL(movie.poster_path)} class="bd-placeholder-img card-img-top" width="100%" height="280">` + 
        `<div class="card-body">` +
        `<h5 id="title" class="title card-title">` + `Titre: ` + movie.title + `</h5>` +
        `<p id="release_date" class="release_date card-text">` + `Date: ` + convertDate(movie.release_date) + `</p>` +
        `<p id="vote_average" class="${getColor(movie.vote_average)}vote_average card-text">` + `Vote: ` + movie.vote_average + `</p>` +
         `</div> 
        <a href="cardFilm.html?id=${movie.id}l" class="btn btn-primary" src="cardFilm.html" target="_self">See movie</a>
        </div>
      </div>`;
      
       
        //container.querySelector("#div2");
        //append(card, img);
        append(card, h5);
        append(card, span);
        append(card, p);
        //append(div, div2);
        append(div, card);
     
      
        })
        
    })

  .catch(function(error) {
    console.log(error);
  });
  //img.src = movie.poster_path;
  //      card.setAttribute("class", "democlass"); 
    
       const getPosterURL = (movies) =>{
        return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
        }
       //let cardMovie;
 const cardMovie =async() =>{
  await getMovies();
  div.innerHTML= data.results.map((movie)=>
    `
    <div id="movies" class="card mb-5" style="width: 18rem;">
    <img id="img" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}" 
    
      class="bd-placeholder-img card-img-top" width="100%" height="280">
        <div class="card-body">
        <h5 id="title" class="title card-title"> Titre: ${movie.title} </h5>
        <p id="release_date" class="release_date card-text">Date: ${movie.release_date} </p>
        <p id="vote_average" class="${(movie.vote_average)}vote_average card-text"> Vote: ${movie.vote_average} </p>
         </div> 
        <a href="cardFilm.html?id=${movie.id}" class="btn btn-primary" target="_self">See movie</a>
        </div>
        </div>`
    /*'<div id="movies" class="card mb-5" style="width: 18rem;">  
        <img id="img" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}" class="bd-placeholder-img card-img-top" width="100%" height="280">
        <div class="card-body">
        <h5 id="title" class="title card-title"> Titre: ${movie.title} </h5>
        <p id="release_date" class="release_date card-text">Date: ${movie.release_date} </p>
        <p id="vote_average" class="${(movie.vote_average)}vote_average card-text"> Vote: ${movie.vote_average} </p>
         </div> 
        <a href="cardFilm.html" class="btn btn-primary" src="cardFilm.html" target="_self">See movie</a>
        </div>
      </div>`*/
      
  )
}
  form.addEventListener('submit',(e) =>{
    e.preventDefault();
    searchTerm = search.value;
    cardMovie();
  /*
    if(searchTerm){
        getMovies(url + '&query=' + searchTerm);
    }else{
        getMovies(url);
    }*/
    console.log(searchTerm);
    });
