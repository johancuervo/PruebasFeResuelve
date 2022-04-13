import { useEffect, useState } from "react";
import { listCollection } from "../helpers/be_helper";
//custom hook to recibe the collections either by filter or pagination 
const useCollections = (keyword="") => {
  const DEFAULT_PAGE = 1;
  const DEFAULT_SIZE = 12;

  const [recordsCollection, setRecordsCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCollection, setPage] = useState(DEFAULT_PAGE);

  const getNewPage = () => setPage((prevState) => prevState + DEFAULT_PAGE);

  const getCollection = async () => {
    const { records } = await listCollection({
      keyword,
      page: pageCollection,
      size: DEFAULT_SIZE,
    });

    if (records === 0) {
      setRecordsCollection(records);
    } else {
      setRecordsCollection((prevState) => [...prevState, ...records]);
    }

    setLoading(false);
  };

  const getCollectionByKeyword = async () => {
    const { records } = await listCollection({
      keyword,
      page: 1,
      size: DEFAULT_SIZE,
    });
    setRecordsCollection([...records]);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getCollection();
  }, [keyword, pageCollection]);

 useEffect(() => {
    setLoading(true);
    getCollectionByKeyword();
  }, [keyword]); 

  return { loading, recordsCollection, getNewPage };
};

export default useCollections;
