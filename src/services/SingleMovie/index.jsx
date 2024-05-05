import axios from "axios";

const URL1 = '/3/movie/';
const URL2 = '?api_key=f6772cda1692504489beade89806b5f1&append_to_response=videos,images,credits';

const BASE_URL = "https://api.themoviedb.org"

const getMovie = async (movieId) => axios.get(`${BASE_URL}${URL1}${movieId}${URL2}`);

export { getMovie }