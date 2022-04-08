import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "../../assets/css/SearchBar.css";
import { searchCollection } from "../../helpers/be_helper";
const SearchBar = ({ search, setSearch, setCollections }) => {
  const navigate = useNavigate();

  //change for event
  const handleChange = async (e) => {
    setSearch(e.target.value);
    const resultCollection = await searchCollection(e.target.value);
    navigate(`?q=${e.target.value}`);
    setCollections(resultCollection);
  };
  /* console.log(search); */

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
