import axios from "axios";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjc3MmNkYTE2OTI1MDQ0ODliZWFkZTg5ODA2YjVmMSIsInN1YiI6IjY2MmIxZjhlM2Q3NDU0MDExYmQyMTFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PMbwvYGWjdXkTP7pJ3q8uL5t7O3dkkw93kqy5mqRfg4'
  }
};

const URL = '/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=f6772cda1692504489beade89806b5f1';

const BASE_URL = "https://api.themoviedb.org"

// const getMovies = async () => axios.get({
//     baseURL: BASE_URL,
//     url: URL,
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjc3MmNkYTE2OTI1MDQ0ODliZWFkZTg5ODA2YjVmMSIsInN1YiI6IjY2MmIxZjhlM2Q3NDU0MDExYmQyMTFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PMbwvYGWjdXkTP7pJ3q8uL5t7O3dkkw93kqy5mqRfg4'
//     }
// })

const getMovies = async () => axios.get(`${BASE_URL}${URL}`);

export { getMovies }