import axios from "axios";


const BASE_URL = "https://api.themoviedb.org";
const URL1 = '/3/search/movie?query=';
const URL2 = '&include_adult=false&language=en-US&api_key=f6772cda1692504489beade89806b5f1';

const getMovies = async (query,pageNumber) => {
  if (pageNumber){
      return axios.get(`${BASE_URL}${URL1}${query}${URL2}${'&page='}${pageNumber}`)
  }
  else{
      return axios.get(`${BASE_URL}${URL1}${query}${URL2}`)
  }
  
};

export { getMovies }