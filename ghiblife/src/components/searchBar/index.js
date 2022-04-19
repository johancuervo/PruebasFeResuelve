import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ search, setSearch }) => {
  const navigate = useNavigate();

  //change for event
  const handleChange = async (e) => {
    setSearch(e.target.value);
    navigate(`/collection/${e.target.value}`);
    if (!e.target.value) {
      navigate("/#");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input 
        className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={search}
        placeholder="Busqueda por Titulo"
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  collections: PropTypes.array,
  search: PropTypes.string,
  setSearch: PropTypes.func,
  setCollections: PropTypes.func,
  handleCollection: PropTypes.func,
};
