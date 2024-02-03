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
      className="search-movie" 
      type="search" 
      placeholder="Forrest Gump" 
      onChange={e => {setQuery(e.target.value)
      console.log(e.target.value);
      }}/>
      <Outlet />
    </div>
  );
}
export default Layout;
