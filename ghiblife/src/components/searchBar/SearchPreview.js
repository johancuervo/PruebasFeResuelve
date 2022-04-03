import PropTypes from "prop-types";
import "../../assets/css/Card.css";

/*component to render Filim Cards.*/
const SearchPreview = ({ index, title, setSearch }) => {
  return (
    <div
      onClick={() => setSearch(title)}
      className={`search-preview ${index === 0 ? "start" : ""}`}
    >
      <div key={index} className="first">
        <div>
          <p className="name">{title}</p>
        </div>
      </div>
    </div>
  );
};
export default SearchPreview;

SearchPreview.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  setSearch: PropTypes.func,
};
