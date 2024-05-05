import './index.scss';
import Pagination from 'react-bootstrap/Pagination';
import { Header } from "../../components/Layout/Header";
import { Footer } from "../../components/Layout/Footer";
import { SideBar } from "../../components/Layout/SideBar";
import { ContentBar } from '../../components/ContentBar';
import { CardList } from "../../components/CardList";
import { Card } from "../../components/Card";
import { NavLink } from "react-router-dom";
import { getMovies } from '../../services/TopMovies';
import { useState, useEffect } from 'react';

function TopMovies() {

  const [movies, setMovies] = useState([]);

  const getInitialData = async () => {
    try {
      const { data } = await getMovies();
      const { results } = data;
      setMovies(results);
      console.log(results);
    } catch (error) {
      alert("Algo fallo en la petición");
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

 

  return (
    <>
      <Header></Header>
      <main className="page-content">
        <SideBar></SideBar>
        <ContentBar>
          <h1>Películas mejor votadas</h1>
          <CardList>
            {
              movies.length > 0 ? movies.map((element,index)=>{
                return(
                  <Card 
                    key={element.id}
                    id={element.id}
                    name={element.original_title}
                    poster_path={element.poster_path}
                    backdrop_path={element.backdrop_path}
                    overview={element.overview}
                    vote_average={element.vote_average}
                    release_date={element.release_date}
                    isTopMovie={true}
                  />
                )
              }) : 'No hay movies'
            }
          </CardList>
          
          <Pagination size="lg">
            <li className="page-item"><NavLink to="/top-movies/page/1" reloadDocument="true" className="page-link">1</NavLink></li>
            <li className="page-item"><NavLink to="/top-movies/page/2" reloadDocument="true" className="page-link">2</NavLink></li>
            <li className="page-item"><NavLink to="/top-movies/page/3" reloadDocument="true" className="page-link">3</NavLink></li>
            <li className="page-item"><NavLink to="/top-movies/page/4" reloadDocument="true" className="page-link">4</NavLink></li>
            <li className="page-item"><NavLink to="/top-movies/page/5" reloadDocument="true" className="page-link">5</NavLink></li>
            <li className="page-item"><NavLink to="/top-movies/page/6" reloadDocument="true" className="page-link">6</NavLink></li>
            <li className="page-item"><NavLink to="/top-movies/page/7" reloadDocument="true" className="page-link">7</NavLink></li>
            <li className="page-item"><NavLink to="/top-movies/page/8" reloadDocument="true" className="page-link">8</NavLink></li>
            <li className="page-item"><NavLink to="/top-movies/page/9" reloadDocument="true" className="page-link">9</NavLink></li>
            <li className="page-item"><NavLink to="/top-movies/page/10" reloadDocument="true" className="page-link"> 10</NavLink></li>
          </Pagination>
        </ContentBar>
      </main>
      <Footer></Footer>
    </>
  )
}

export { TopMovies }