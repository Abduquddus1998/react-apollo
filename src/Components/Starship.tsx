import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_STARSHIP } from "queries/starships";
import {
  CharacterInfo,
  FilmCard,
  FilmInfo,
  FilmsContainer,
  FilmWrapper,
  Label,
  StarShipInfo,
  Title,
} from "./Styles";

export default function Starship() {
  const params = useParams();

  const { loading, data } = useQuery(GET_STARSHIP, {
    variables: { starshipId: params.starshipId },
  });

  return (
    <div>
      {loading && <div>LOADING....</div>}

      {!loading && data && (
        <FilmWrapper>
          <Title>{data.starship.name}</Title>

          <StarShipInfo>
            <CharacterInfo>
              <Label>Model:</Label> {data.starship.model}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Star ship class:</Label> {data.starship.starshipClass}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Crew:</Label> {data.starship.crew}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Passengers:</Label> {data.starship.passengers}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Cargo capacity:</Label> {data.starship.cargoCapacity}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Ship length:</Label> {data.starship.length}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Consumables:</Label> {data.starship.consumables}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Cost in credits:</Label> {data.starship.costInCredits}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Hyper drive rating:</Label>{" "}
              {data.starship.hyperdriveRating}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Mas atmosphering speed:</Label>{" "}
              {data.starship.maxAtmospheringSpeed}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Manufacturers:</Label>{" "}
              {data.starship.manufacturers.map((manufacture: string) => (
                <div
                  key={manufacture}
                  style={{ marginRight: "5px", flexWrap: "wrap" }}
                >
                  {manufacture},
                </div>
              ))}
            </CharacterInfo>
          </StarShipInfo>

          <Title fontSize="18px">Films</Title>

          <FilmsContainer>
            {data.starship.filmConnection.films.map((film: any) => (
              <FilmCard key={film.id}>
                <FilmInfo>
                  <Label>Film name:</Label>
                  <p>{film.title}</p>
                </FilmInfo>
                <FilmInfo>
                  <Label>Director:</Label>
                  <p>{film.director}</p>
                </FilmInfo>
                <FilmInfo>
                  <Label>Producers:</Label>
                  <div>
                    {film.producers.map((producer: string) => (
                      <p key={producer}>{producer},</p>
                    ))}
                  </div>
                </FilmInfo>
                <FilmInfo>
                  <Label>Release date:</Label>
                  <p>{film.releaseDate}</p>
                </FilmInfo>
              </FilmCard>
            ))}
          </FilmsContainer>
        </FilmWrapper>
      )}
    </div>
  );
}
