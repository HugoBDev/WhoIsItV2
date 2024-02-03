import { Link, Outlet } from "react-router-dom";
import "./layout.scss"


interface LayoutProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Layout({setQuery} : LayoutProps) {
 
  return (
    <div id="layout-page">
      <Link  to={"/home"} className="h1">Who Is It ?</Link>
      <input 
      className="search-movie search-deployed" 
      type="search" 
      placeholder="Forrest Gump" 
      onChange={e => {setQuery(e.target.value)
      const input = document.getElementsByClassName("search-movie")[0];
      if (e.target.value === ""){
        input.classList.add("search-deployed")
        input.classList.remove("search-on-top")
      }else{
        input.classList.add("search-on-top")
        input.classList.remove("search-deployed")
      }
      
      }}/>
      <Outlet />
    </div>
  );
}
export default Layout;
