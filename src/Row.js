import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "...." : string;
  }
  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies &&
          movies.map((movie) => (
            <Fade right>
              <Link to={`/movie/${movie.id}`}>
                <div className="card">
                  <img
                    className="img1"
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.name}
                  ></img>

                  <div className="detail">
                    <h3>
                      {truncate(
                        movie?.title || movie?.name || movie?.orignal_name,
                        17
                      )}
                    </h3>
                    <p>{truncate(movie?.overview, 80)}</p>
                  </div>

                  <div className="catagory">
                    IMDB {movie.vote_average}/10
                    <i className="fas fa-film"></i>
                  </div>

                  <div className="views">
                    <VisibilityOutlinedIcon fontSize="small" />
                    <span>{movie.vote_count}</span>
                    <i className="far fa-eye"></i>{" "}
                  </div>
                </div>
              </Link>
            </Fade>
          ))}
      </div>
    </div>
  );
}

export default Row;
