// const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  fetchAnimation: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
  fetchSciFiMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
  fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  fetchMysteryMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=9648`,
  fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,

  fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};

export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=abc
