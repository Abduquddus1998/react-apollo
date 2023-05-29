import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { FilmCard, FilmInfo, FilmsContainer, Label } from "./Styles";

import { GET_ALL_FILMS } from "queries/films";

export default function Films() {
  const navigate = useNavigate();
  const { loading, data } = useQuery(GET_ALL_FILMS);

  const onSelectFilm = (filmId: string) => {
    navigate(`/films/${filmId}`);
  };

  return (
    <div>
      {loading && <div>LOADING....</div>}

      {!loading && data && (
        <Label>Total films: {data.allFilms.totalCount}</Label>
      )}

      <FilmsContainer>
        {!loading &&
          data.allFilms.films.map((film: any) => (
            <FilmCard key={film.id} onClick={() => onSelectFilm(film.id)}>
              <FilmInfo>
                <Label>Film name:</Label>
                <p>{film.title}</p>
              </FilmInfo>
              <FilmInfo>
                <Label>Director:</Label>
                <p>{film.director}</p>
              </FilmInfo>
              <FilmInfo>
                <Label>Release date:</Label>
                <p>{film.releaseDate}</p>
              </FilmInfo>
              <FilmInfo>{film.openingCrawl}</FilmInfo>
            </FilmCard>
          ))}
      </FilmsContainer>
    </div>
  );
}
