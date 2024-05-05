import './index.scss';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='header-navbar'>
      <ul>
          <li><NavLink to="/">Películas</NavLink></li>
          <li><NavLink to="/about">Acerca de</NavLink></li>
          <li><NavLink to="/settings">Configuración</NavLink></li>
      </ul>
    </div>
  )
}

export { Navbar }