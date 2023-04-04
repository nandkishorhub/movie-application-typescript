import React, { useState } from "react";
import { useAppDispatch } from "../../common/hooks";
import { Link, useNavigate } from "react-router-dom";

import {
  fetchMoviesAsync,
  fetchShowsAsync,
} from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
    dispatch(fetchMoviesAsync(term.trim()));
    dispatch(fetchShowsAsync(term.trim()));
    setTerm("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie Store</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search movies or shows"
            onChange={onChange}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
