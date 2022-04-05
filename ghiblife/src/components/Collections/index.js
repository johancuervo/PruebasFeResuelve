import { useEffect, useState } from "react";
import { searchCollection } from "../../helpers/be_helper";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../assets/css/Card.css";
import CollectionsCards from "./CollectionsCards";
import SearchBar from "../searchBar";

/*Component the list Collection*/

const CollectionList = () => {
  const [collections, setCollections] = useState([]);
  const [search, setSearch] = useState("");

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
        <div className="card-deck">
          {collections.length &&
            collections.map(
              ({ title, primaryimageurl, objectnumber, images }, index) => {
                return images?.length > 0 ? (
                  <CollectionsCards
                    key={index}
                    title={title}
                    primaryimageurl={primaryimageurl}
                    objectnumber={objectnumber}
                  />
                ) : null;
              }
            )}
        </div>
      }
    </div>
  );
};
export default CollectionList;
