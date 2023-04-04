import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../common/hooks";
import { useEffect } from "react";
import {
  fetchMovieOrShowDetailAsync,
  getMovieOrShowDetails,
  removeMovieOrShowDetail,
} from "../../features/movies/movieSlice";
import Loader from "../Loader/Loader";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const data = useAppSelector(getMovieOrShowDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieOrShowDetailAsync(imdbID));
    // we are cleaning up earlier details
    // so that we should not see previous detail while fetching new details
    // so it is better to cleanup previous details
    return () => {
      dispatch(removeMovieOrShowDetail());
    };
  }, [imdbID, dispatch]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{"Title" in data && data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> :{" "}
                {"imdbRating" in data && data.imdbRating}
              </span>
              <span>
                Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {"imdbVotes" in data && data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> :{" "}
                {"Runtime" in data && data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> :{" "}
                {"Year" in data && data.Year}
              </span>
            </div>
            <div className="movie-plot">{"Plot" in data && data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{"Director" in data && data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{"Actors" in data && data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{"Genre" in data && data.Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{"Language" in data && data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{"Awards" in data && data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img
              src={"Poster" in data ? data.Poster : ""}
              alt={"Title" in data ? data.Title : ""}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
