import './index.scss';
import Pagination from 'react-bootstrap/Pagination';
import { Header } from "../../components/Layout/Header";
import { Footer } from "../../components/Layout/Footer";
import { SideBar } from "../../components/Layout/SideBar";
import { ContentBar } from "../../components/ContentBar";
import { CardList } from "../../components/CardList";
import { Card } from "../../components/Card";
import { useParams, useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { getMovies } from '../../services/MovieSearch';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faCircleLeft } from '@fortawesome/free-solid-svg-icons';

function MovieSearchResult(props) {
	let { query,pageNumber } = useParams();

	const [movies, setMovies] = useState([]);
	const [fullMovies,setFullMovies] = useState(0);

	const getInitialData = async () => {
	try {
		console.log(query,pageNumber);
		const { data } = await getMovies(query,pageNumber);
		const { results } = data;
		setMovies(data.results);
		setFullMovies(data.total_pages);
		console.log(data);
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
			<h1>Resultados de la busqueda</h1>
			<CardList>
				{/* {
				movies.map((element,index)=>{
					return(
					<Card 
						key={element.id}
						name={element.name}
						poster_path={element.poster_path}
						backdrop_path={element.backdrop_path}
						overview={element.overview}
						vote_average={element.vote_average}
						release_date={element.release_date}
					/>
					)
				})
				} */}
				{/* {console.log(movies.results.length > 0)} */}
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
					/>
					)
				}) : 'No se encontraron resultados para \"'+query+"\""
				}
			</CardList>
			
			<Pagination size="lg">
				{
					(() => {
						let index = 1;
						let liList = [];
						if(fullMovies > 0){
							let limit = fullMovies>10 ? 10 : fullMovies;
							while(index > 0 && index <= limit){
								liList.push(<li key={"page"+index} className="page-item"><NavLink to={"/movie-search/"+query+"/page/"+index} reloadDocument="true" className="page-link">{index}</NavLink></li>);
								index++;
							}
							return(
								liList
							)
						}
					})()
				}
			</Pagination>
			</ContentBar>
			</main>
			<Footer></Footer>
		</>
	)
}

export { MovieSearchResult }