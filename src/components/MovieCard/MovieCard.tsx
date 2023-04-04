import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
import { movieData } from "../../interfaces/interfaces";

export interface MovieCardIProps {
    key : number,
    data: movieData
}

const MovieCard = (props :MovieCardIProps) => {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="cad-bootom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
