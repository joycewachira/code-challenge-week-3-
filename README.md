# week-three-code-challenge
 ## Movie Ticket App
This is a JavaScript application that allows users to buy tickets for movies. The app fetches data from an API and dynamically manipulates the DOM to display the movie details and a button to buy tickets.

## Description
The Movie Ticket App fetches data from the following API endpoint:

GET /films

The app then dynamically creates HTML elements to display the movie details, including the title, runtime, showtime, and available tickets. Users can click the "Buy Ticket" button to decrease the number of available tickets by 1. If there are no available tickets, the button will be disabled.

## usage
1.Clone the repository:
`https://github.com/joycewachira/code-challenge-week-3-`
2.Navigate to project folder
`cd week-three-code-challenge`
3.Install the dependencies:
    `npm install`
4.Run the app:
`npm start`
*Install the json-server using the command `npm insall -g json-server`
*to get backend started run this command `json-server\\watch db.json`
*Test your server by visiting this route in the browser `http://localhost:3000/films`

## Core Deliverables

As a user, I can:

1. See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads.
2. See a menu of all movies on the left side of the page in the `ul#films`
   element when the page loads.
3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available).

## Bonus Deliverables

1. Click on a movie in the menu to replace the currently displayed movie's
   details with the new movie's details.
2. When a movie is sold out (when there are no available tickets remaining),
   indicate that the movie is sold out by changing the button text to "Sold
   Out". Also update the film item in the `ul#films` menu by adding a class of
   `sold-out` to the film.

## Extra Bonus

1. When a ticket is purchased, persist the updated number of `tickets_sold` on
   the server.
2. Delete a film from the server.

## Technologies Used
JavaScript
HTML
CSs


## Author
Author:[Joyce Wachira]

 ## License
 MIT License