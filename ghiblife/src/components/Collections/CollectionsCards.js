import PropTypes from "prop-types";

/*component to render Filim Cards.*/
const CollectionsCards = ({ collection, setSeletedCollection, setModal }) => (
  <div
    className="card after:content-[''] before:content-['']"
    onClick={() => {
      setModal(true);
      setSeletedCollection(collection);
    }}
  >
    <p className="card-title">{collection?.title}</p>
    {
      <div className="card-body">
        <img src={collection?.primaryimageurl} alt={collection?.title} />
        <p>{collection?.objectnumber}</p>
      </div>
    }
  </div>
);

export default CollectionsCards;

CollectionsCards.propTypes = {
  collection: PropTypes.shape({
    id: PropTypes.number,
    primaryimageurl: PropTypes.string,
    title: PropTypes.string,
    objectnumber: PropTypes.string,
  }),
  setModal: PropTypes.func,
  setSeletedCollection: PropTypes.func,
};
