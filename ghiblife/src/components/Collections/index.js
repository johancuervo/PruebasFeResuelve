import { useEffect, useState } from "react";
import { searchCollection } from "../../helpers/be_helper";
import "bootstrap/dist/css/bootstrap.min.css";
import CollectionsCards from "./CollectionsCards";
import SearchBar from "../searchBar";
import CollectionCardModal from "../ModalCards/CollectionCardModal";

/*Component the list Collection*/

const CollectionList = () => {
  const [collections, setCollections] = useState([]);
  const [search, setSearch] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [seletedCollection, setSeletedCollection] = useState(false);

  const getCollection = async () => {
    const collections = await searchCollection();

    setCollections(collections);
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <div>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setCollections={setCollections}
      />
      {
        <div className="card-decking">
          {collections
            ?.filter((collection) => collection.primaryimageurl)
            ?.map((collection, index) => (
              <CollectionsCards
                key={index}
                collection={collection}
                setSeletedCollection={setSeletedCollection}
                setToggleModal={setToggleModal}
              />
            ))}
        </div>
      }
      {toggleModal && (
        <CollectionCardModal
          setToggleModal={setToggleModal}
          seletedCollection={seletedCollection}
        />
      )}
    </div>
  );
};
export default CollectionList;
