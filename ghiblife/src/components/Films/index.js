import { useEffect, useState } from "react";
import { listFilms } from "../../helpers/be_helper";
import "bootstrap/dist/css/bootstrap.min.css";
import FilimCards from "./FilimCards";

/*Component the list Films*/

const FilmsList = () => {
  const [films, setFilms] = useState([]);

  const getFilms = async () => {
    const films = await listFilms();
    setFilms(films);
  };
  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
      <FilimCards films={films} />
    </div>
  );
};
export default FilmsList;
