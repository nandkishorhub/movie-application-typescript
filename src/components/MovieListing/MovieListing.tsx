// import { useSelector } from "react-redux";
import { useAppSelector } from "../../common/hooks";
import {
  getAllMovies,
  getAllShows,
  getMovieStatus,
  getShowsStatus,
} from "../../features/movies/movieSlice";
 
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import settings from "../../common/settings";
import Loader from "../Loader/Loader";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useAppSelector(getAllMovies);
  const shows = useAppSelector(getAllShows);
  const movieStatus = useAppSelector(getMovieStatus);
  const showsStatus = useAppSelector(getShowsStatus);

  let renderMovies, rednerShows: JSX.Element[] | JSX.Element;
 // movies.Response === "True"
  renderMovies =
    ('Response' in movies &&  movies.Response === "True") ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{`${'Error' in movies && movies.Error} - Try some anoother serach name`}</h3>
      </div>
    );

  rednerShows =
  ('Response' in shows &&  shows.Response === "True") ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="movies-error">
       ( <h3>{`${'Error' in shows && shows.Error} - Try some another serach name`}</h3>)
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movieStatus === "pending" ? (
            <Loader />
          ) : (
            <Slider {...settings}>{renderMovies}</Slider>
          )}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="show-container">
          {showsStatus === "pending" ? (
            <Loader />
          ) : (
            <Slider {...settings}>{rednerShows}</Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
