import './index.scss';
import { useState } from "react"; 
import { useNavigate,useSearchParams } from "react-router-dom";

function SearchBar() {

  const [value, setValue] = useState(""); 
  const [result, setResult] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function handleSubmit(e) { 
      e.preventDefault(); 
      let params = new FormData(e.target);
      console.log(params.get("query"));
      
      window.location.href = "/movie-search/"+params.get("query")+"/page/1/";
      // setResult( 
      //     "Form has been submitted with with Input: " + 
      //         value 
      // );
  }

  function handleChange(e) { 
        setValue(e.target.value); 
        setResult(""); 
    } 


  return (
    <div className='header-searchbar'>
        <form onSubmit={handleSubmit}>
            <svg className='search-icon' width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            <input name="query" value={value} onInput={handleChange} type="text" placeholder="Busca una pelicula..." />
            <button type='submit' className='search-button'>Buscar</button>
        </form>
    </div>
  )
}

export { SearchBar }