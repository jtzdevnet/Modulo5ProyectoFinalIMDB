const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjc3MmNkYTE2OTI1MDQ0ODliZWFkZTg5ODA2YjVmMSIsInN1YiI6IjY2MmIxZjhlM2Q3NDU0MDExYmQyMTFlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PMbwvYGWjdXkTP7pJ3q8uL5t7O3dkkw93kqy5mqRfg4'
  }
};

const URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

const getMovies = async () =>{
    const request = await fetch(URL, options);
    const response = await request.json();
    console.log(response);
    return response;
};

export { getMovies };