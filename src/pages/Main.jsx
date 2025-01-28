import React, { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContextProvider";
import { toastWarnNotify } from "../helpers/ToastNotify";
import Load from "../utils/loading.gif";

const API_KEY = "eb928bf9ff2cf207195e2e03011a1a26";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && currentUser) {
      getMovies(SEARCH_API + searchTerm);
    } else if (!currentUser) {
      toastWarnNotify("Please log in to search a movie");
      // alert("Please log in to search a movie");
    } else {
      toastWarnNotify("Please enter a text");
      // alert("Please enter a text");
    }
  };
  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input ps-3 pt-4 pb-4"
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
          data-test="searchBar"
        />
        <button type="submit" className="btn btn-outline-danger mx-3" data-test="searchBtn">
          Search
        </button>
      </form>
      <div className="d-flex justify-content-center flex-wrap">
        {loading ? (
          <img src={Load} alt="" />
        ) : (
          movies?.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
