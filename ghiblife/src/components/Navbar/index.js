import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <img 
          src="https://lh3.googleusercontent.com/U-ZixYsCPDEMXulqbw7c0u5RW-ysjO__mgWT6SqIH9GUw1cr2qxO6i19qOcnCx7YyFo1Tuo2YGFxP7DoBhsBpHEsrQD2Dz6itO7oZzZBTQZbI8c1wL5E_yxEuutU_smOzE_-n2uf5CaS4feGCnuvbN1eXsEo_vKyz-ygzOgkVz-388-tT_f4OQ1NeCVNnC7nTu9YUyDSCHvzS3RtdQJLKBFOwjX1Cq0Es9V9IhvriG-uHltXp0CUx5SGvum7sPJE3SsDBMUmhaceed0kZNGH1UGaMNyO31EqGCozJHAREbcH8Xrx9xGqs8GMU9_ZTJU9q_cdE2GzPIwrKnELPFIvaACYjUxOlQfzYUHU_vzBrkfSGZBiKhey19-M6t-WUQpd1s4beA1cVEZZFJn7UUaP03Yt2LhGHXNAW5nYfNVLvq6zL55WV7FsWQJobWNO3YqXRM743RDLAisWWUNTnAUCTGjaCWuoDUp6MjIPOwwtpOl5xtoqwmd7QYNPpmoCcq3UYbeUZ4OIi9dv-p89QR9zTa7MpSlz2b-rwDuDGqWkKUcsvc1fRew9nxQdSDuzrNP9bUg7BNtkOaObF9g27WnQa4iXbQmA8hMxfcGlBbEM_VMNzPdkByNvdQKxTBoUOHTXR5pfZlhVBbdZXytpMvH9xVzpGm8U3OX7pWXawIp261vyzbB-htZRGdZuhX0cx8H0Pn4FK99KxJEyqCHykHjzkvuzBxBdcndzQo29DdwuojCgZcRrwDH3LS0jkEmc=w314-h126-no?authuser=0" 
          />
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              "w-full md:block md:w-auto " +
              (navbarOpen ? " flex justify-end" : " hidden")
            }
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <Link to="/#" className=" focus-within:text-blue-700">
                Inicio
              </Link>
              <Link
                to="/collection/armor"
                className=" focus-within:text-blue-700"
              >
                Armaduras
              </Link>
              <Link
                to="/collection/Imperial"
                className=" focus-within:text-blue-700"
              >
                Fotografia Imperial
              </Link>
              <Link
                to="collection/colombia"
                className=" focus-within:text-blue-700"
              >
                Colombia
              </Link>
              <Link
                to="collection/mexico"
                className=" focus-within:text-blue-700"
              >
                Mexico
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
