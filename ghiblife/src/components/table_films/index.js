import { useEffect, useState } from "react";
import { listFilms } from "../../helpers/be_helper";
import "bootstrap/dist/css/bootstrap.min.css";

const FilmsList = () => {
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    const films = await listFilms();
    setFilms(films);
  };
  useEffect(() => {
    getFilms();
  }, []);
  console.log(films);
  return <div></div>;
};
export default FilmsList;
