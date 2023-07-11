const menu = document.getElementById("menu");
const filmList = document.getElementById("filmlist");

menu.addEventListener("click", () => {
  if (filmList.style.display !== "none") {
    filmList.style.display = "none";
  } else {
    filmList.style.display = "block";
  }
});

const fetchFilms = () => {
  fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(films => {
      films.forEach(film => displayFilmList(film));
    });
};

const displayFilmList = film => {
  const listItem = document.createElement("li");
  listItem.textContent = film.title;
  filmList.appendChild(listItem);

  listItem.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.querySelector("#headers h3");
    name.innerHTML = film.title;

    const runtime = document.getElementById("runtime");
    runtime.textContent = `Runtime: ${film.runtime}`;

    const showtime = document.getElementById("showtime");
    showtime.textContent = `Showtime: ${film.showtime}`;

    const availableTickets = document.getElementById("availabletickets");
    const result = film.capacity - film.tickets_sold;
    availableTickets.textContent = `Available Tickets: ${result}`;

    const image = document.querySelector("#section img");
    image.src = film.poster;

    const description = document.querySelector("p");
    description.textContent = `Description: ${film.description}`;

    const button = document.getElementById("button");
    button.textContent = "BUY TICKET";
    button.style.backgroundColor = "green";
    button.style.width = "150px";
    button.style.height = "50px";
    button.style.fontSize = "20px";

    button.addEventListener("click", () => {
      result--;
      availableTickets.textContent = `Available Tickets: ${result}`;

      if (result <= 0) {
        button.textContent = "Sold out";
        availableTickets.textContent = "Available Tickets: Sold out";
        button.style.backgroundColor = "red";
      }
    });
  });
};

fetchFilms();