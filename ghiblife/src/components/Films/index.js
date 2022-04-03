import { useEffect, useState } from "react";
import { listFilms } from "../../helpers/be_helper";
import "bootstrap/dist/css/bootstrap.min.css";
import FilimCards from "./FilimCards";
import SearchBar from "../searchBar";
import "../../assets/css/Card.css";

/*Component the list Films*/

const FilmsList = () => {
  const [films, setFilms] = useState([]);
  const [updateFilms, setUpdateFilms] = useState([]);

  const getFilms = async () => {
    const films = await listFilms();
    setUpdateFilms(films);
    setFilms(films);
  };

  const filmsCards = () => {
    const filmcard = (
      <div className="card-deck">
        {updateFilms &&
          updateFilms.map(({ title, director, image, release_date }, index) => {
            return (
              <FilimCards
                key={index}
                title={title}
                director={director}
                image={image}
                release_date={release_date}
              />
            );
          })}
        ;
      </div>
    );
    return filmcard;
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
      <SearchBar updateFilms={updateFilms} setFilms={setFilms} films={films} />
      {filmsCards()}
    </div>
  );
};
export default FilmsList;
