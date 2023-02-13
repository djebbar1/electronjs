
/*const container = document.getElementById('container');
const div = document.getElementById('movies');

const img = document.querySelector('img');
const search = document.getElementById('search');
const sub = document.getElementById('sub');
const form = document.getElementById('form');
function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=6eb686ce381d7a58252a49f23e82b65f"

async function getMovies(){
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
}
getMovies();

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
        card.innerHTML = '<div id="movies" class="card mb-5" style="width: 18rem;">' + 
        `<img id="img" src=${getPosterURL(movie.poster_path)} class="bd-placeholder-img card-img-top" width="100%" height="280">` + 
        `<div class="card-body">` +
        `<span id="overview" class="overview card-text">` + `overwiew: ` + movie.overview+ `</span>` +
        `<p id="release_date" class="release_date card-text">` + `Date: ` + convertDate(movie.release_date) + `</p>` +
        `<p id="vote_average" class="vote_average card-text">` + `Vote: ` + movie.vote_average + `</p>` +
        `<span id="overview" class="overview card-text">` + `overwiew: ` + movie.video + `</span>`+
         `</div> 
        </div>
        
  
  <button  class="btn2 btn-primary"><a href="index.html" target="_self">Return</a></button>
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
*/

/*const container = document.getElementById('container');
const div = document.getElementById('movies');
const objet = document.addEventListener('objet');
const container = document.getElementById('container');
const div = document.getElementById('movies');


function createNode(element) {
	return document.createElement(element);
}
function append(parent, el) {
	return parent.appendChild(el);
}


const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=6eb686ce381d7a58252a49f23e82b65f"


async function getMovies(){
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    //showMovies(data.results);
}
getMovies();

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
        card.innerHTML = '<div id="movies" class="card mb-5" style="width: 18rem;">' +
        `<img id="img" src=${getPosterURL(movie.poster_path)} class="bd-placeholder-img card-img-top" width="100%" height="280">` + 
        `<div class="card-body">` +
        `<h5 id="title" class="title card-title">` + `Titre: ` + movie.title + `</h5>` +
        `<span id="overview" class="overview card-text">` + `overwiew: ` + movie.overview + `</span>` +
        `<p id="release_date" class="release_date card-text">` + `Date: ` + convertDate(movie.release_date) + `</p>` +
        `<p id="vote_average" class="vote_average card-text">` + `Vote: ` + movie.vote_average + `</p>` +
        `<span id="overview" class="overview card-text">` + `overwiew: ` + movie.video + `</span>`+
        `</div> 
        </div>
        </div>

        <button  class="btn2 btn-primary"><a href="index.html" target="_self">Return</a></button>`;
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
*/
/*



*/





/*
const search = document.getElementById('search');
const sub = document.getElementById('sub');
const form = document.getElementById('form');

function createNode(element) {
	return document.createElement(element);
}
function append(parent, el) {
	return parent.appendChild(el);
}

const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=6eb686ce381d7a58252a49f23e82b65f"

//const url2 = "https://api.themoviedb.org/3/discorver/movie/top_rated?api_key=6eb686ce381d7a58252a49f23e82b65f"

//const url3 = "https://api.themoviedb.org/3/search/movie/top_rated?api_key=6eb686ce381d7a58252a49f23e82b65f"


async function getMovies(){
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    //showMovies(data.results);
}
getMovies();

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let movies = results[0];
    return movies.map(function(movie) {
        //showMovies(data.results);
        
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
    card.innerHTML = '<div id="movies" class="card2 mb-5" style="width: 18rem;">' +
    `<img id="img" src=${getPosterURL(movie.poster_path)} class="bd-placeholder-img card-img-top" width="100%" height="280">` + 
    `<div class="card-body">` +
    `<h5 id="title" class="title card-title">` + `Titre: ` + movie.title + `</h5>` +
    `<span id="overview" class="overview card-text">` + `overwiew: ` + movie.overview+ `</span>` +
    `<p id="release_date" class="release_date card-text">` + `Date: ` + convertDate(movie.release_date) + `</p>` +
    `<p id="vote_average" class="vote_average card-text">` + `Vote: ` + movie.vote_average + `</p>` +
    `<span id="overview" class="overview card-text">` + `overwiew: ` + movie.video + `</span>`+
     `</div> 
     </div>
  </div>
  
  <button  class="btn2 btn-primary"><a href="index.html" target="_self">Return</a></button>`;
    
  append(card, h5);
  append(card, span);
  append(card, p);
  //append(div, div2);
  append(div, card);
    })
})
.catch(function(error) {
  console.log(error);

});*/