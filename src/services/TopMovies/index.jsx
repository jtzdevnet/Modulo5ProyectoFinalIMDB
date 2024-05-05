import axios from "axios";

const BASE_URL = "https://api.themoviedb.org";
const URL = '/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=vote_average.desc&vote_count.gte=1000&api_key=f6772cda1692504489beade89806b5f1';


const getMovies = async (pageNumber) => {
    if (pageNumber){
        return axios.get(`${BASE_URL}${URL}${'&page='}${pageNumber}`)
    }
    else{
        return axios.get(`${BASE_URL}${URL}`)
    }
};

export { getMovies }