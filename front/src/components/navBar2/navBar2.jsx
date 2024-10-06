import {Route,Routes, useLocation} from "react-router-dom";


function NavBar2() {


    let location=useLocation();
    


  return (
    <nav class="bg-gradient-to-b from-gray-800 to-gray-600 p-4">
    <div class="flex justify-center space-x-4">
    <button
          className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ${
            location.pathname === "/allTramites" ? "underline" : ""
          }`}
        >
        <a href="/allTramites">
        Pendientes
        </a>
      </button>
      <button
          className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ${
            location.pathname === "/allTramitesAprobados" ? "underline" : ""
          }`}
        >
        <a href="/allTramitesAprobados">
        Aprobados
        </a>
      </button>
      <button
          className={`text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 ${
            location.pathname === "/allTramitesRechazados" ? "underline" : ""
          }`}
        >
        <a href="/allTramitesRechazados">
        Rechazados
        </a>
      </button>
    </div>
      </nav>
  );
}

export default NavBar2;
