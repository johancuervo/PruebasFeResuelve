import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <img
            src="https://lh3.googleusercontent.com/OoqJ823l4JZ2Lm8nPYHWC7P64ESWY9q2WntHXbOCsHhxfp5XChJSY6Ea7JEUZGd_zTVIuKMG8nlIpItAHD66xpcQB32orYf5Ez_xrJYepOb-EkeqLUzuXMGAPDDb3UEmp2wXlE8hghQ0fVLJnkcg12xrKpJ0H7RZsKBdJnr9BVMFO8TOJiudUin6R2ZRAj9ljvh3hegI-Vuo4MqRqGfUl4gcat9IQjw1wiG-01dVKLVU4vF1k0TF4NVcfAk-XPiQumcAApwhvP7nWDcRDh5QPSHAVW9LnTNjhJ1LbvHNjuQkent3iY__peYJox8BnpEoH3T3QwdytEIBm7t-ZCFWpNP77PztJ2L3zxPdehmupcExMull_vyfMhc69diEkepNDJE7RwT2vY50_-wBNsr7feFuqugXbdT4zi1U61qgGVJyuuusyPYYZtm9pmfb4pVCRPtIsLETSdfKMBwQ820nMj0M24RzLR11gsJlE2AwXnktViVkpumpMKAXWTRkKzjDBqB8uKu1TEF9GGYSK58GX9GY3omoS2teBCLGoaC7K2qYpjWHvIhOQddlH3RzmQJay7Qf965h0NPfdrnL_ZxVKDGeQikmhZttOhq7rnX3UvZeAHYhBJKoAx3OjP4OLH-zKvPO5WJVePrm1_YiogsI4tRH54rp6-r-iRzbWBCUEWtSZKZXPrlkZfDCQ5fOwbmy-yR2TUZYzPFbu4ZXIlURshMNMP9kSDR6r_Dv50GzIHxslOHKqAOZAHGEnvQL=w314-h126-no?authuser=0"
            alt=""
          />
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium">
              <Link to="/#">Inicio</Link>
              <Link to="/collection/armor">Armaduras</Link>
              <Link to="/collection/Imperial">Fotografia Imperial</Link>
              <Link to="collection/colombia">Colombia</Link>
              <Link to="collection/mexico">Mexico</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
