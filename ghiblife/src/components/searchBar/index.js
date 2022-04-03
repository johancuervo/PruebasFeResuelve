import { useState } from "react";
import PropTypes from "prop-types";
import SearchPreview from "./SearchPreview";
import "../../assets/css/SearchBar.css";
const SearchBar = ({ updateFilms, setFilms, films }) => {
  const [search, setSearch] = useState("");

  //change for event
  const handleChange = (e) => {
    setSearch(e.target.value);


    filter(e.target.value);
  };
  //compare name initial
  const compareTitle = (title, search) => {
    var keyLen = search.length;
    title = title.toLowerCase().substring(0, keyLen);
    if (search === "") return false;
    return title === search.toLowerCase();
  };
  console.log(search);
  //filter Names
  const filter = (searchTerm) => {
    let resultSearch = updateFilms.filter((element) => {
      if (
        element.title
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        compareTitle(element.title, searchTerm) === true
      ) {
        return element;
      }
      return false;
    });
    setFilms(resultSearch);
  };
  const cancelSearch = () => {
    setSearch("");
  };
  const handleFilms = () => {
    const filmsResult = films.map(({ title }, index) => {
      return <SearchPreview title={title} key={index} setSearch={setSearch} />;
    });
    return filmsResult;
  };

  return (
    <div className="containerInput">
      <button
        onClick={() => cancelSearch()}
        className={`cancel-btn ${search.length > 0 ? "active" : "inactive"}`}
      >
        X
      </button>
      <input
        className="from-control inputBuscar"
        value={search}
        placeholder="Busqueda por Titulo"
        onChange={handleChange}
      />
      <button className="btn btn-success">Buscar</button>
      {search.length > 0 ? <div>{handleFilms()}</div> : null}
    </div>
  );
};
export default SearchBar;

SearchBar.propTypes = {
  updateFilms: PropTypes.array,
  setUpdateFilms: PropTypes.func,
  films: PropTypes.array,
};
