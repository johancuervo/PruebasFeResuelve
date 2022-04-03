import PropTypes from "prop-types";
/*component to render Filim Cards.*/
const FilimCards = ({ id, title, director, image, release_date }) => {
  return (
    <div className="card" key={id}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <img src={image} alt={title}></img>
        <h4 className="card-title">Producer: {director}</h4>
        <p className="card-text">Year: {release_date}</p>
      </div>
    </div>
  );
};
export default FilimCards;

FilimCards.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  director: PropTypes.string,
  release_date: PropTypes.string,
};
