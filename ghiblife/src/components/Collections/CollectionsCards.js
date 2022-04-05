import PropTypes from "prop-types";
/*component to render Filim Cards.*/
const CollectionsCards = ({ id, title, primaryimageurl, objectnumber }) => {
  return (
    <div className="card" key={id}>
      <p>{title}</p>
      {
        <div className="card-body">
          <img src={primaryimageurl} alt="" />
          <p>{objectnumber}</p>
        </div>
      }
    </div>
  );
};
export default CollectionsCards;

CollectionsCards.propTypes = {
  id: PropTypes.string,
  primaryimageurl: PropTypes.string,
  title: PropTypes.string,
  objectnumber: PropTypes.string,
};
