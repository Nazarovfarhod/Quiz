//rrd imports
import { Outlet } from "react-router-dom";
//components
import { Navbar } from "../components";

function MainLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
