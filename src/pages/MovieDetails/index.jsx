import './index.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Header } from "../../components/Layout/Header";
import { Footer } from "../../components/Layout/Footer";
import { SideBar } from "../../components/Layout/SideBar";
import { useParams, useNavigate } from 'react-router-dom';
import { getMovie } from '../../services/SingleMovie';
import { getMovieES } from '../../services/SingleMovie/index-es.jsx';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import defaultPhoto from '../../assets/images/default-photo.jpg';
import defaultBg from '../../assets/images/no-bg.jpg';

function MovieDetails(props) {

  let { movieId } = useParams();
  let navigate = useNavigate();
  console.log(movieId);

  const [movie, setMovie] = useState({});
  const [movieES, setMovieES] = useState({});

  const getInitialData = async () => {
    try {
      const { data } = await getMovie(movieId);
      const { results } = data;
      setMovie(data);
      console.log(data);
    } catch (error) {
      alert("Algo fallo en la petición");
    }
  };

  const getInitialDataES = async () => {
    try {
      const { data } = await getMovieES(movieId);
      const { results } = data;
      setMovieES(data);
    } catch (error) {
      alert("Algo fallo en la petición");
    }
  };

  useEffect(() => {
    getInitialData();
    getInitialDataES();
  }, []);

  return (
    <>
      <Header></Header>
      <main className="page-content">
        <SideBar></SideBar>
        <div className='content-bar movie-details'>
          <button className='back-button' onClick={() => navigate(-1)}><FontAwesomeIcon icon={faCircleLeft} />Regresar</button>
          {Object.keys(movie).length > 0 ?
          <div className='movie-wrap'>
            <div className="movie-poster">
              <img src={movie.poster_path ? 'https://image.tmdb.org/t/p/w500/'+movie.poster_path : defaultPhoto} alt="" />
            </div>
            <div className="movie-info">
              <div className="movie-header">
                <div className='movie-title'>
                  <h1>{movie.title}</h1>
                  <p><span className='movie-date'><span>Fecha de estreno:</span> {movie.release_date}</span><span className='divider'> | </span><span className='movie-runtime'><span>Duracion:</span> {Math.floor(movie.runtime / 60)+'h '+movie.runtime % 60+'m'}</span> </p>
                </div>
                <div className='movie-rating'>
                  <p><FontAwesomeIcon icon={faStar} />{movie.vote_average.toFixed(1)}</p>
                </div>
              </div>
              <div className="movie-tabs">
                <Tabs
                  defaultActiveKey="sinopsis"
                  id="movie-details-tab"
                  className="mb-3"
                >
                  <Tab eventKey="sinopsis" title="Sinopsis">
                    <p>{movieES.overview}</p>
                    <div className="credits-genre">
                      <ul className="cast-members">
                        <li>Interpretada Por</li>
                        {
                          movie.credits.cast.slice(0,4).map((cast_member,index)=>{
                            return (
                              <li className="cast-member" key={index}>
                                <span>{cast_member.name}</span>
                              </li>
                            )
                          })
                        }
                      </ul>
                      <ul className="crew-members">
                        <li>Creada Por</li>
                        {
                          movie.credits.crew.slice(0,4).map((crew_member,index)=>{
                            return (
                              <li className="crew-member" key={index}>
                                <span>{crew_member.name}</span>
                              </li>
                            )
                          })
                        }
                      </ul>
                      <ul className="genres">
                        <li>Genero</li>
                        {
                          movie.genres.map((genre,index)=>{
                            return (
                              <li className="genre" key={index}>
                                <span>{genre.name}</span>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </Tab>
                  <Tab eventKey="trailers" title="Trailer">
                    <div className="youtube-wrap">
                      <div><iframe src={movie.videos.results.length ? "https://www.youtube.com/embed/"+movie.videos.results[0].key : "https://www.youtube.com/embed/"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
                    </div>
                  </Tab>
                  <Tab eventKey="credits" title="Creditos" >
                    <div className='credit-container'>
                      <h3>Cast</h3>
                      <ul className="credits cast-members">
                          {
                            movie.credits.cast.slice(0,50).map((cast_member,index)=>{
                              return (
                                <li className="cast-member" key={index}>
                                  <span>{cast_member.name}</span>
                                  <span>{cast_member.known_for_department}</span>
                                </li>
                              )
                            })
                          }
                        </ul>
                    </div>
                    <hr />
                    <div className='credit-container'>
                      <h3>Equipo</h3>
                      <ul className="credits crew-members">
                        {
                          movie.credits.crew.slice(0,50).map((crew_member,index)=>{
                            return (
                              <li className="crew-member" key={index}>
                                <span>{crew_member.name}</span>
                                <span>{crew_member.known_for_department}</span>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </Tab>
                </Tabs>
                
              </div>
            </div>
            <img src={movie.images.backdrops.length > 0 ? "https://image.tmdb.org/t/p/w1280/"+movie.images.backdrops[0].file_path : defaultBg} alt="" className="bg-image" />
          </div>
          
          : ''}
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export { MovieDetails }