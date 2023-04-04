import React from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../common/hooks";

import {
  fetchMoviesAsync,
  fetchShowsAsync,
  getMovieOrShowDetails,
} from "../../features/movies/movieSlice";

const Home = () => {
  const moviesORShows = useAppSelector(getMovieOrShowDetails);
  console.log("HOME", Object.keys(moviesORShows).length)
  const dispatch = useAppDispatch();
  const movieText = "Harry";
  const showText = "Friends";

  useEffect(() => {
    if (Object.keys(moviesORShows).length === 0) {
      console.log("useeffect")
      dispatch(fetchMoviesAsync(movieText));
      dispatch(fetchShowsAsync(showText));
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {/* <div className="banner-img"></div> */}
      <MovieListing />
    </div>
  );
};

export default Home;
