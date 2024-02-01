import { Outlet } from "react-router-dom";
import "./layout.scss"



function Layout() {
  return (
    <div id="layout-page">
      <h1>Who Is It ?</h1>
      <input className="search-movie" type="search" placeholder="Forrest Gump" />
      <Outlet />
    </div>
  );
}
export default Layout;
