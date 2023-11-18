import { http, HttpResponse, delay } from "msw";

export const handlers = [
  http.get(
    "https://www.omdbapi.com/?apiKey=4428c013&s=Harry&type=movie",
    async () => {
      console.log("handler...........")
      await delay(150);
      return HttpResponse.json({
        Search: [
          {
            Title: "Harry Potter and the Deathly Hallows: Part 2",
            Year: "2011",
            imdbID: "tt1201607",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
          },
          {
            Title: "Harry Potter and the Sorcerer's Stone",
            Year: "2001",
            imdbID: "tt0241527",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
          },
          {
            Title: "Harry Potter and the Chamber of Secrets",
            Year: "2002",
            imdbID: "tt0295297",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg",
          },
          {
            Title: "Harry Potter and the Prisoner of Azkaban",
            Year: "2004",
            imdbID: "tt0304141",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
          },
          {
            Title: "Harry Potter and the Goblet of Fire",
            Year: "2005",
            imdbID: "tt0330373",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
          },
        ],
        totalResults: "743",
        Response: "True",
      });
    }
  ),
  http.get(
    " https://www.omdbapi.com/?apiKey=4428c013&s=Friends&type=series",
    async () => {
      return HttpResponse.json({
        Search: [
          {
            Title: "Friends",
            Year: "1994–2004",
            imdbID: "tt0108778",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
          },
          {
            Title: "Foster's Home for Imaginary Friends",
            Year: "2004–2009",
            imdbID: "tt0419326",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNjYyNGFjOTctYzFmNC00NzdmLThhMDgtNjEzZTRmNzA3ODc5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
          },
          {
            Title: "Friends from College",
            Year: "2017–2019",
            imdbID: "tt5565334",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMjMyNjgxNDc3MV5BMl5BanBnXkFtZTgwNDUyMzQ2NjM@._V1_SX300.jpg",
          },
          {
            Title: "Happy Tree Friends",
            Year: "2000–2016",
            imdbID: "tt0770762",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMzRiMjRkNDYtNjNmZC00MTQwLThjNGQtZDEzZDA0OWVlOWUxXkEyXkFqcGdeQXVyMjAxODI1Nzk@._V1_SX300.jpg",
          },
          {
            Title: "Garfield and Friends",
            Year: "1988–1995",
            imdbID: "tt0094469",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNGQ0ZTc2ZjMtNjE2Mi00NjU3LTkyNDktNDA0NmUwODE1OTZmXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_SX300.jpg",
          },
        ],
        totalResults: "640",
        Response: "True",
      });
    }
  ),
];
