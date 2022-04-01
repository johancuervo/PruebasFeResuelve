import PropTypes from "prop-types";
import "../../assets/css/Card.css";
/*component to render Filim Cards.*/
const FilimCards = ({ films }) => {
  return (
    <div className="card-deck">
      {films &&
        films.map((film) => (
          <div className="card" key={film.id}>
            <div className="card-body">
              <h5 className="card-title">{film.title}</h5>
              <img src={film.image} alt={film.title}></img>
              <h4 className="card-title">{film.director}</h4>
              <p className="card-text">{film.release_date}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default FilimCards;

FilimCards.propTypes = {
  films: PropTypes.array,
};
