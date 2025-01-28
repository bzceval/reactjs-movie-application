import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import VideoSection from "../components/VideoSection";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState("");
  const [videoKey, setVideoKey] = useState();

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = movieDetails;

  // const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const API_KEY = "d6278b3dc3e6f8f8376a89851c3f8c8f";
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
  }, [movieDetailBaseUrl, videoUrl]);

  return (
    <div className="container my-5">
      {videoKey && <VideoSection videoKey={videoKey} />}
      <div className="row row-detail py-5 g-4">
        <div className="col-md-5">
          <img
            src={poster_path ? baseImageUrl + poster_path : defaultImage}
            className="img-fluid rounded-start shadow rounded"
            alt="movie"
            data-test='movieDetailImg'
          />
        </div>
        <div className="col-md-7 d-flex flex-column">
          <div className="card detail-card shadow pb-5">
            <p className="text-end me-4 mt-5" data-test='releaseDate'>Release Date: <span> {release_date} </span> </p>
            <div className="card-body pe-5 pt-4 ps-5">
              <h1 className="text-center" data-test='movieDetailTitle'>{title}</h1>
              <h4 className="card-title mt-5">Overview</h4>
              <p className="card-text" data-test='movieDetailOverview'>{overview}</p>
            </div>
            <div className="sub-title text-end me-4">
              <p className="mb-1">Rate : {vote_average}</p>
              <p>Total Vote : {vote_count}</p>
            </div> 
            <button className="btn btn-back mt-3"><Link to={-1} className="card-link">Go Back</Link></button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MovieDetail;
