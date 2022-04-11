import { useEffect, useState } from "react";
import { listCollection } from "../helpers/be_helper";

const useCollections = (keyword) => {
  const DEFAULT_PAGE = 1;
  const DEFAULT_SIZE = 12;

  const [recordsCollection, setRecordsCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCollection, setPage] = useState(DEFAULT_PAGE);

  const getNewPage = () => setPage((prevState) => prevState + DEFAULT_PAGE);
  console.log(recordsCollection);

  const emptySetRecordsCollection = () => setRecordsCollection([]);

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
      page: pageCollection,
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

  return { loading, recordsCollection, getNewPage, emptySetRecordsCollection };
};

export default useCollections;
