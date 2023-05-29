import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_FILM } from "queries/films";

import {
  CharacterCard,
  CharacterInfo,
  CharactersList,
  FilmCrawl,
  FilmDirector,
  FilmWrapper,
  Label,
  Title,
} from "./Styles";

export default function Film() {
  const params = useParams();

  const { loading, data } = useQuery(GET_FILM, {
    variables: { filmId: params.filmId },
  });

  console.log("data", data);

  // name:"Tatooine"
  // climates:['arid']
  // diameter:10465
  // gravity:"1 standard"
  // orbitalPeriod:304
  // population:200000
  // rotationPeriod:23
  // surfaceWater: 1
  // terrains:['desert']

  return (
    <div>
      {loading && <div>LOADING....</div>}

      {!loading && data && (
        <FilmWrapper>
          <Title>{data.film.title}</Title>
          <FilmDirector>
            Director: <strong>{data.film.director}</strong> Release date:{" "}
            <strong>{data.film.releaseDate}</strong>
          </FilmDirector>
          <FilmCrawl>
            <div>Crawl: {data.film.openingCrawl}</div>
          </FilmCrawl>

          <Title fontSize="18px">Characters</Title>
          <CharactersList>
            {data.film.characterConnection.characters.map((character: any) => (
              <CharacterCard key={character.id}>
                <CharacterInfo>
                  <Label>Name:</Label> {character.name}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Birth Year:</Label> {character.birthYear}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Gender:</Label> {character.gender}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Mass:</Label> {character.mass}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Height:</Label> {character.height}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Eye color:</Label> {character.eyeColor}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Hair color:</Label> {character.hairColor}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Skin color:</Label> {character.skinColor}
                </CharacterInfo>
              </CharacterCard>
            ))}
          </CharactersList>

          <Title fontSize="18px">Planets</Title>
          <CharactersList>
            {data.film.planetConnection.planets.map((planet: any) => (
              <CharacterCard width="250px" key={planet.id}>
                <CharacterInfo>
                  <Label>Name:</Label> {planet.name}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Climate:</Label>{" "}
                  {planet.climates.map((climate: any) => (
                    <div style={{ marginRight: "5px", flexWrap: "wrap" }}>
                      {climate},
                    </div>
                  ))}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Diameter:</Label> {planet.diameter}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Gravity:</Label> {planet.gravity}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Orbital Period:</Label> {planet.orbitalPeriod}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Population:</Label> {planet.population}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Ratio Period:</Label> {planet.rotationPeriod}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Surface Water:</Label> {planet.surfaceWater}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Terrains:</Label>{" "}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    {planet.terrains.map((terrain: any) => (
                      <div
                        style={{
                          marginRight: "5px",
                        }}
                      >
                        {terrain},
                      </div>
                    ))}
                  </div>
                </CharacterInfo>
              </CharacterCard>
            ))}
          </CharactersList>
        </FilmWrapper>
      )}
    </div>
  );
}
