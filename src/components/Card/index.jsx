import './index.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import defaultPhoto from '../../assets/images/default-photo.jpg';

function Card(props) {
  const { id,name,poster_path,backdrop_path,overview,vote_average,release_date,isTopMovie } = props;
  
  return (
    <>
      <li className={isTopMovie ? 'container-card top-movie-card' : 'container-card' }>
        <Link to={'/movie/'+id}>
            <img src={poster_path ? 'https://image.tmdb.org/t/p/w500/'+poster_path : defaultPhoto} alt="" />
            <span className="card-movie-rating"><FontAwesomeIcon icon={faStar} />{vote_average.toFixed(1)}</span>
        </Link>
      </li>
    </>
  )
}

export { Card }