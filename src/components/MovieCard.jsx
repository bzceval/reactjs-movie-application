import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider'; 

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const defaultImage =
  'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const getVoteClass = (vote) => {
    if (vote > 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };
  return (
    <div
      className="movie shadow"
      onClick={() => {
        navigate('/details/' + id); 
      }}
    >
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="movie-card"
      />
      <div className="d-flex align-items-baseline justify-content-between p-3 text-white">
        <h5 className='movie-title text-center'>{title}</h5>
        {currentUser && (
          <span className={`tag ${getVoteClass(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview.slice(0,120)}...</p>
        <button className='btn detail-btn'>Detail</button>
      </div>
    </div>
  );
};

export default MovieCard;
