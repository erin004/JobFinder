import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Navbar() {
  let navigate = useNavigate();

  return (
    <nav className="bg-slate-900 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-black dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center text-white">
          <Link to={"/"} className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-5 sm:h-10 rounded-full"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              JobFinder
            </span>
          </Link>
        </a>
        <div className="flex md:order-2">
          {!Cookies.get("token") && (
            <li className="relative inline-flex items-center justify-center p-0.5 py-2 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <Link
                to={"/login"}
                className="block py-4 pr-4 pl-3 text-xl text-black rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-white hover:text-white border-gray-700">
                <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </Link>
            </li>
          )}
          {Cookies.get("token") && (
            <li className="relative inline-flex items-center justify-center p-0.5 py-2 mb-1 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <a
                onClick={() => {
                  Cookies.remove("token");
                  navigate("/login");
                }}
                className="block py-4 pr-4 pl-3 text-xl text-black rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-white hover:text-white border-gray-700">
                <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Logout
                </span>
              </a>
            </li>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-900 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                className="block py-2 pr-4 pl-3 text-xl text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-white hover:text-white border-gray-700"
                aria-current="page">
                Home
              </Link>
            </li>

            <li>
              <Link
                to={"/job-vacancy"}
                className="block py-2 pr-4 pl-3 text-xl text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-white hover:text-white border-gray-700"
                aria-current="page">
                Vacancy
              </Link>
            </li>
            <li>
              <button className="block py-2 pr-4 pl-3 text-xl text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:hover:text-white hover:text-white border-gray-700">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
