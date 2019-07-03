const btnFind = document.getElementById("find");
const inputTxt = document.getElementById("txtP");

btnFind.addEventListener("click", function() {
  getFilm(inputTxt.value);
});

function getFilm(title) {
  fetch("http://www.omdbapi.com/?apikey=df13f3b6&t=" + title)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      response.json().then(function(movie) {
        console.log(movie);
        document.getElementById("app").innerHTML = ` 
        
        <br>
        <img src="${movie.Poster}" class="thumbnail">
    
        <header>
          <h2>${movie.Title}</h2>
              <h3>Sinopse</h3>
              ${movie.Plot}
              <br><strong>Elenco:</strong> ${movie.Actors}</br>
              <br><strong>Diretor:</strong> ${movie.Director}</br>
              <br><strong>Gênero:</strong> ${movie.Genre}</br>
              <br><strong>Avaliação IMDB:</strong> ${movie.imdbRating}</br>
              <br><strong>Duração:</strong> ${movie.Runtime}</br>
          </header>
    `;
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}