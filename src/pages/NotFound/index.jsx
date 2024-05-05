import './index.css';
import { Header } from "../../components/Layout/Header";
import { Footer } from "../../components/Layout/Footer";
import { SideBar } from "../../components/Layout/SideBar";

function NotFound() {
  return (
    <>
    <Header></Header>
    <main className="page-content">
      <SideBar></SideBar>
      <div className='content-bar'>
        <h1>Esta pagina no existe. :(</h1>
      </div>
    </main>
    <Footer></Footer>
    </>
  )
}

export { NotFound }