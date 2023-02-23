// Define a list of movies
const movies = [  {    title: "The Shawshank Redemption",    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",    genre: "Drama",    releaseDate: "1994-10-14",    userRating: 9.3,    runTime: 142,    country: "USA",    language: "English"  },  {    title: "The Godfather",    description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",    genre: "Drama",    releaseDate: "1972-03-24",    userRating: 9.2,    runTime: 175,    country: "USA",    language: "English"  },  // Add more movies to the list];

// Get references to form elements
const form = document.querySelector("form");
const movieList = document.querySelector(".movie-list");

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form behavior
  
  // Get form input values
  const movieType = form.elements["movie-type"].value;
  const genre = form.elements["genre"].value;
  const releaseDate = form.elements["release-date"].value;
  const userRating = form.elements["user-rating"].value;
  const runTime = form.elements["run-time"].value;
  const country = form.elements["country"].value;
  const language = form.elements["language"].value;
  
  // Filter movies based on input values
  const filteredMovies = movies.filter(function(movie) {
    return (
      (movieType === "All" || movieType === movie.type) &&
      (genre === "All" || genre === movie.genre) &&
      (releaseDate === "" || releaseDate === movie.releaseDate) &&
      (userRating === "" || userRating <= movie.userRating) &&
      (runTime === "" || runTime >= movie.runTime) &&
      (country === "All" || country === movie.country) &&
      (language === "All" || movie.language.includes(language))
    );
  });
  
  // Generate HTML for filtered movies
  let movieHtml = "";
  filteredMovies.forEach(function(movie) {
    movieHtml += `
      <div class="col">
        <div class="card">
          <img src="..." class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.description}</p>
          </div>
        </div>
      </div>
    `;
  });
  
  // Display filtered movies
  movieList.innerHTML = movieHtml;
});

// Reset form
const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", function() {
  form.reset();
  movieList.innerHTML = "";
});