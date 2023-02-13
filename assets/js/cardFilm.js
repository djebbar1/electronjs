const paramString = window.location.search;
const searchParam = new URLSearchParams(paramString);
const container = document.getElementById('container');
const p = document.getElementById('mov');
let id = searchParam.get('id');
let dataInfo = [];
async function getMovies(){
   
    dataInfo = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6eb686ce381d7a58252a49f23e82b65f&language=en-US`).then((res) =>res.json());
      console.log(dataInfo.original_title);
      
      p.innerHTML= 

      
      
      `<div id="movies" class="card mb-5" style="width: 18rem;">
      <img id="img" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${dataInfo.poster_path}" class="bd-placeholder-img card-img-top" width="100%" height="280">
      <div class="card-body">
      <h5 id="title" class="title card-title">${dataInfo.original_title} </h5>
      <p id="release_date" class="release_date card-text">${dataInfo.release_date}</p>
      <p id="vote_average" class="vote_average card-text">${dataInfo.vote_average}</p>
      <span id="overview" class="overview card-text">${dataInfo.overview}</span>
      </div> 
      </div>
<button  class="btn2 btn-primary"><a href="index.html" target="_self">Return</a></button>
    </div>`

      
  }
  getMovies();



/*let getConfig = function () {
    
	let url = "".concat(baseURL, 'configuration?api-hey=', APIKEY);
	fetch(url)
	.then((result) =>{
		result.json();	
	})
	.then((data) => {
		baseImageURL = data.images.secure_base_url;
		configData = data.images;
		console.log('config:', data);
		console.log('config fetched');
		runSearch(movie.title);
	})
	.catch(function(err){
	alert(err);
	});
	}
	let runSearch = function (keyword){
	let url=''.concat(baseURL, 'search/movie?api-hey=', APIKEY, '&query=', keyword);
	fetch(url)
	.then(result => result.json())	
	.then((data) => {
		document.getElementById('output');
        img.src = movie.poster_path;
        card.setAttribute("class", "democlass"); 
    
        const getPosterURL = (movies) =>{
        return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
        }
	})

}
*/

/*
const container = document.getElementById('container');
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
        form.addEventListener('submit',(e) =>{
            e.preventDefault();
            const searchTerm = search.value;
            console.log(searchTerm);
            if(searchTerm){
                card(url + '&query=' + searchTerm);
            }else{
                card(url);
            }
            });
            
        })
    })
  .catch(function(error) {
    console.log(error);
  });*/

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