import axios from "axios";



// const URL = '/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&api_key=f6772cda1692504489beade89806b5f1';


const BASE_URL = "https://api.themoviedb.org"
const URL1 = '/3/discover/movie';
const URL2 = '?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&api_key=f6772cda1692504489beade89806b5f1&page=';
// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc


const getMovies = async (pageNumber) => axios.get(`${BASE_URL}${URL1}${URL2}${pageNumber}`);


export { getMovies }