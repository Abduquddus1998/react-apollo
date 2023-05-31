import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_PLANET } from "queries/planets";

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

export default function Planet() {
  const params = useParams();

  const { loading, data } = useQuery(GET_PLANET, {
    variables: { planetId: params.planetId },
  });

  return (
    <div>
      {loading && <div>LOADING....</div>}

      {!loading && data && (
        <FilmWrapper>
          <Title>{data.planet.name}</Title>

          <StarShipInfo>
            <CharacterInfo>
              <Label>Population:</Label> {data.planet.population}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Diameter:</Label> {data.planet.diameter}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Gravity:</Label> {data.planet.gravity}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Orbital period:</Label> {data.planet.orbitalPeriod}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Rotation period:</Label> {data.planet.rotationPeriod}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Surface water:</Label> {data.planet.surfaceWater}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Climates:</Label>{" "}
              {data.planet.climates.map((climate: string) => (
                <div
                  key={climate}
                  style={{ marginRight: "5px", flexWrap: "wrap" }}
                >
                  {" "}
                  {climate},
                </div>
              ))}
            </CharacterInfo>
            <CharacterInfo>
              <Label>Manufacturers:</Label>{" "}
              {data.planet.terrains.map((terrain: string) => (
                <div
                  key={terrain}
                  style={{ marginRight: "5px", flexWrap: "wrap" }}
                >
                  {terrain},
                </div>
              ))}
            </CharacterInfo>
          </StarShipInfo>

          <Title fontSize="18px">Films</Title>

          <FilmsContainer>
            {data.planet.filmConnection.films.map((film: any) => (
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
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {film.producers.map((producer: string) => (
                      <p key={producer}>{producer},</p>
                    ))}
                  </div>
                </FilmInfo>
                <FilmInfo>
                  <Label>Release date:</Label>
                  <p>{film.releaseDate}</p>
                </FilmInfo>
                <FilmInfo>
                  <p>Crawl: {film.openingCrawl}</p>
                </FilmInfo>
              </FilmCard>
            ))}
          </FilmsContainer>
        </FilmWrapper>
      )}
    </div>
  );
}
