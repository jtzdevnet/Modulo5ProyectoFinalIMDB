import './index.scss'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo,faHouse,faUsers,faStar,faIdBadge,faGear,faCaretRight } from '@fortawesome/free-solid-svg-icons';
import sitelogo from '../../../assets/images/logo.png';

function sideBarClick(e){
  e.preventDefault();
  e.target.parentNode.classList.toggle('active');
}

function SideBar() {
  return (
    <div className='side-bar'>
      <div className="header-logo">
        <a href="/" ><img src={sitelogo} alt="" /></a>
      </div>
      <a href="/" onClick={sideBarClick} className="sidebar-opener"><FontAwesomeIcon icon={faCaretRight} /></a>
      <div className="menu-list">
        <h5>Menu</h5>
        <ul className="sidebar-link-list">
          <li><NavLink to="/" className="link"><FontAwesomeIcon icon={faHouse} /><span>Home</span></NavLink></li>
          <li><NavLink to="/top-movies" className="link"><FontAwesomeIcon icon={faStar} /><span>Las Más Votadas</span></NavLink></li>
        </ul>
      </div>
      <div className="menu-list">
        <h5>Social</h5>
        <ul className="sidebar-link-list">
          <li><NavLink to="/friends" className="link"><FontAwesomeIcon icon={faUsers} /><span>Amigos</span></NavLink></li>
        </ul>
      </div>
      <div className="menu-list">
        <h5>General</h5>
        <ul className="sidebar-link-list">
          <li><NavLink to="/profile" className="link"><FontAwesomeIcon icon={faIdBadge} /><span>Perfil</span></NavLink></li>
          <li><NavLink to="/settings" className="link"><FontAwesomeIcon icon={faGear} /><span>Configuracion</span></NavLink></li>
          <li><NavLink to="/about" className="link"><FontAwesomeIcon icon={faCircleInfo} /><span>Acerca de</span></NavLink></li>
        </ul>
      </div>

    </div>
  )
}

export { SideBar }