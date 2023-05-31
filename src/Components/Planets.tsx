import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { GET_ALL_PLANETS } from "queries/planets";

import { FilmCard, FilmInfo, FilmsContainer, Label } from "./Styles";

export default function Planets() {
  const navigate = useNavigate();

  const { loading, data } = useQuery(GET_ALL_PLANETS);

  const onSelectPlanet = (id: string) => {
    navigate(`/planets/${id}`);
  };

  return (
    <div>
      {loading && <div>LOADING....</div>}

      {!loading && data && (
        <Label>Total planets: {data.allPlanets.totalCount}</Label>
      )}

      <FilmsContainer>
        {!loading &&
          data.allPlanets.planets.map((planet: any) => (
            <FilmCard key={planet.id} onClick={() => onSelectPlanet(planet.id)}>
              <FilmInfo>
                <Label>Planet name:</Label>
                <p>{planet.name}</p>
              </FilmInfo>
              <FilmInfo>
                <Label>Population:</Label>
                <p>{planet.population}</p>
              </FilmInfo>
              <FilmInfo>
                <Label>Diameter:</Label>
                <p>{planet.diameter}</p>
              </FilmInfo>
              <FilmInfo>
                <Label>Climate:</Label>
                <div>
                  {planet.climates.map((climate: string) => (
                    <p key={climate}>{climate},</p>
                  ))}
                </div>
              </FilmInfo>
            </FilmCard>
          ))}
      </FilmsContainer>
    </div>
  );
}
