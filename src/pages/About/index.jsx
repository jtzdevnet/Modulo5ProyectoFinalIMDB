import './index.scss';
import { Header } from "../../components/Layout/Header";
import { Footer } from "../../components/Layout/Footer";
import { SideBar } from "../../components/Layout/SideBar";

function About() {
  return (
    <>
      <Header></Header>
      <main className="page-content">
        <SideBar></SideBar>
        <div className='content-bar'>
          <h1>Acerca de</h1>
          <p>Este es el proyecto final del Modulo 5 - "Frontend"</p>
          <p>Desarrollado con React y utlizando la API de <a href="https://developer.themoviedb.org/docs/" target="_blank">The Movie Database</a></p>
          <p>Hecho por: Jose Arturo Talamantes Zuñiga</p>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export { About }