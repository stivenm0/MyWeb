import { Link, useLocation } from "react-router-dom";
import logo from "../assets/profile.svg";

function NavBar() {
  const { pathname } = useLocation();

  const style = 'bg-white border-b border-indigo-300 shadow-sm shadow-indigo-200 animate-pulse';
  return (
    <>
      <header className="font-semibold text-gray-900">
        <div className="container flex flex-col flex-wrap items-center px-3 py-4 mx-auto md:px-0 md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-4 font-semibold text-gray-900 transition-opacity duration-200 title-font md:mb-0 hover:opacity-75"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-16 h-16 rounded-full bg-slate-600"
            />
          </Link>
          <nav className="flex flex-wrap items-center justify-around w-full space-x-0 text-base font-normal text-gray-900 md:w-auto md:ml-auto md:space-x-4 lg:justify-center">
            <Link
              to="/"
              className={`py-1.5 px-3 md:px-4 rounded-full duration-500 hover:scale-95
              ${pathname === "/" ? style : ""}`}
            >
              Stivenm
            </Link>
            <Link
              to="/proyectos"
              className={`py-1.5 px-3 md:px-4 rounded-full duration-500 hover:scale-95
              ${pathname === "/proyectos" ? style : ""}`}
            >
              Proyectos
            </Link>
            <Link
              to="/habilidades"
              className={`py-1.5 px-3 md:px-4 rounded-full duration-500 hover:scale-95
              ${pathname === "/habilidades" ? style : ""}`}
            >
              Habilidades
            </Link>
            <Link
              to="/formacion"
              className={`py-1.5 px-3 md:px-4 rounded-full  duration-500 hover:scale-95
              ${pathname === "/formacion" ? style : ""}`}
            >
              Formación
            </Link>
            <a
              href="mailto:estivenyeizon@gmail.com" 
              className="shadow-none rounded-full border-b text-white hover:shadow-sm py-1.5 px-3 md:px-4 bg-slate-500
              hover:cursor-pointer hover:bg-blue-300"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
