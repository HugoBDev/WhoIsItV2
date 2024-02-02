import { Link, Outlet } from "react-router-dom";
import "./layout.scss"



function Layout() {
  return (
    <div id="layout-page">
      <Link  to={"/home"} className="h1">Who Is It ?</Link>
      <input 
      className="search-movie" 
      type="search" 
      placeholder="Forrest Gump" />
      <Outlet />
    </div>
  );
}
export default Layout;
