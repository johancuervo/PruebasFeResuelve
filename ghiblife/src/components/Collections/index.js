import { useState } from "react";
import { PuffLoader } from "react-spinners";
import "bootstrap/dist/css/bootstrap.min.css";
import CollectionsCard from "./CollectionsCard";
import CollectionCardModal from "../CollectionCardModal";
import useCollections from "../../hooks/useCollections";
import { useParams } from "react-router-dom";
import SearchBar from "../searchBar";

/*Component the list Collection*/

const CollectionList = () => {
  const { keyword } = useParams();

  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [seletedCollection, setSeletedCollection] = useState(false);
  const { loading, recordsCollection, getNewPage } = useCollections(keyword);
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      {<SearchBar search={search} setSearch={setSearch} />}
      {
        <div className="card-decking px-11">
          {recordsCollection
            ?.filter((collection) => collection.primaryimageurl)
            ?.map((collection, index) => (
              <CollectionsCard
                key={index}
                collection={collection}
                setSeletedCollection={setSeletedCollection}
                setModal={setModal}
              />
            ))}
        </div>
      }
      <div className="flex flex-col items-center justify-center">
        {loading && <PuffLoader />}
      </div>

      {modal && (
        <CollectionCardModal
          toggle={toggle}
          seletedCollection={seletedCollection}
        />
      )}
      <div className="flex flex-col items-center justify-center">
        <button
          className=" bg-black hover:bg-black-700 text-white font-bold py-2 px-4 mt-4 rounded"
          onClick={getNewPage}
        >
          cargar mas
        </button>
      </div>
    </div>
  );
};
export default CollectionList;
