export interface movieData {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieOrShowDetails {
  Title: string;
  imdbRating: string;
  imdbVotes: string;
  Runtime: string;
  Year: string;
  Director: string;
  Actors: string;
  Genre: string;
  Language: string;
  Awards: string;
  Poster: string;
  Plot: string;
}

export interface nestedMovieObj {
  Response: string;
  Search: movieData[];
  totalResults: string;
  Error?: string;
}

export interface InitialState {
  movies: nestedMovieObj | {};
  shows: nestedMovieObj | {};
  movieOrShowDetail: MovieOrShowDetails | {};
  movieStatus: string;
  showStatus: string;
}

export interface RootState {
  movies: InitialState;
}
