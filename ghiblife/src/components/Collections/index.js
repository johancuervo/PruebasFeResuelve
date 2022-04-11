import { useState } from "react";
import { PuffLoader } from "react-spinners";
import "bootstrap/dist/css/bootstrap.min.css";
import CollectionsCards from "./CollectionsCards";
import CollectionCardModal from "../ModalCards/CollectionCardModal";
import useCollections from "../../hooks/useCollections";
import { useParams } from "react-router-dom";
import SearchBar from "../searchBar";

/*Component the list Collection*/

const CollectionList = () => {
  const { keyword } = useParams();

  const [search, setSearch] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [seletedCollection, setSeletedCollection] = useState(false);
  const { loading, recordsCollection, getNewPage } = useCollections(keyword);

  return (
    <div>
      {<SearchBar search={search} setSearch={setSearch} />}
      {
        <div className="card-decking">
          {recordsCollection
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
      {loading && <PuffLoader />}
      {toggleModal && (
        <CollectionCardModal
          setToggleModal={setToggleModal}
          seletedCollection={seletedCollection}
        />
      )}

      <button onClick={getNewPage}>cargar mas</button>
    </div>
  );
};
export default CollectionList;
