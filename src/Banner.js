import axios from "./axios";
import { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";
import React from "react";

import "react-typewriting-effect/dist/index.css";
import Fade from "react-reveal/Fade";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "...." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center ",
      }}
    >
      <Fade top>
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.orignal_name}
          </h1>
          <div className="baneer_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>

          <div className="banner_desription">
            {truncate(movie?.overview, 200)}
          </div>
        </div>

        <div className="banner--fadeBottom" />
      </Fade>
    </header>
  );
}

export default Banner;
