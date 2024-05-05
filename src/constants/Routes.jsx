import { useRoutes, useParams } from 'react-router-dom';
import { Home } from "../pages/Home";
import { About } from '../pages/About';
import { Page } from "../pages/Page";
import { TopMovies } from "../pages/TopMovies";
import { TopMoviesPage } from "../pages/TopMoviesPage";
import { NotFound } from "../pages/NotFound";
import { MovieDetails } from '../pages/MovieDetails';
import { MovieSearchResult } from "../pages/MovieSearchResult";

function Routes() {
    const routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/page/:pageNumber', element: <Page />,},
        { path: '/top-movies', element: <TopMovies />,},
        { path: '/top-movies/page/:pageNumber', element: <TopMoviesPage />,},
        { path: '/movie/:movieId', element: <MovieDetails />,},
        { path: '/movie-search/:query/page/:pageNumber/', element: <MovieSearchResult />,},
        { path: '/about', element: <About /> },
        { path: '*', element: <NotFound /> },
    ]);
    return routes;
}

export { Routes };