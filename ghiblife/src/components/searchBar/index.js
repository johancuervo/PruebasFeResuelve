import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "../../assets/css/SearchBar.css";

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
    <div className="auto">
      <input
        className="search-bar"
        value={search}
        placeholder="Busqueda por Titulo"
        onChange={handleChange}
      />

      <button className="btn btn-success">Buscar</button>
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
