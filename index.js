// Global variables
const filmList = document.getElementById("films");
const filmTitle = document.getElementById("film-title");
const filmRuntime = document.getElementById("film-runtime");
const filmShowtime = document.getElementById("film-showtime");
const filmAvailableTickets = document.getElementById("film-available-tickets");
const filmPoster = document.querySelector(".film-poster img");

// Fetch film data
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const films = data.films;
      // Populate film list
      films.forEach((film) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.classList.add("film-title");
        span.textContent = film.title;
        li.appendChild(span);
        filmList.appendChild(li);
      });
      // Display first film's details
      displayFilmDetails(films[0]);
      // Add click event listener to film titles
      const filmTitles = document.querySelectorAll(".film-title");
      filmTitles.forEach((filmTitle) => {
        filmTitle.addEventListener("click", () => {
          const selectedFilm = films.find(
            (film) => film.title === filmTitle.textContent
          );
          displayFilmDetails(selectedFilm);
        });
      });
    } else {
      console.error("Error: " + xhr.status);
    }
  }
};
xhr.open("GET", "db.json", true);
xhr.send();

// Display film details
function displayFilmDetails(film) {
  filmTitle.textContent = film.title;
  filmRuntime.textContent = film.runtime;
  filmShowtime.textContent = film.showtime;
  const availableTickets = film.capacity - film["tickets_sold"];
  filmAvailableTickets.textContent = availableTickets.toString();
  filmPoster.src = film.poster;
}