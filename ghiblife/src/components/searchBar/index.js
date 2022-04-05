import PropTypes from "prop-types";

import "../../assets/css/SearchBar.css";
import { searchCollection } from "../../helpers/be_helper";
const SearchBar = ({ search, setSearch, setCollections }) => {
  //change for event
  const handleChange = async (e) => {
    setSearch(e.target.value);
    const resultCollection = await searchCollection(e.target.value);
    setCollections(resultCollection);
  };
  console.log(search);

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
