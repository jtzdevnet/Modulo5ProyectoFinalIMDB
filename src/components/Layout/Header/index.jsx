import './index.scss'
import { Navbar } from "../../Navbar";
import { SearchBar } from "../../SearchBar";
import { UserProfileButton } from "../../UserProfileButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import sitelogo from '../../../assets/images/logo.png' ;
import Nav from 'react-bootstrap/Nav';
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import MyNavbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
        <div className="header-logo">
          <a href="/" ><img src={sitelogo} alt="" /></a>
        </div>
        
        
        
        <MyNavbar expand="lg">
          <MyNavbar.Toggle aria-controls="responsive-navbar-nav">
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faXmark} />
          </MyNavbar.Toggle>
            <MyNavbar.Collapse id="basic-navbar-nav">
              <Navbar/>
              <SearchBar/>
              
            </MyNavbar.Collapse>
        </MyNavbar>
        
        <UserProfileButton/>
    </header>
  )
}

export { Header }