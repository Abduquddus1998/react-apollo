import { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { GET_ALL_STARSHIPS } from "queries/starships";

import { CharacterCard, CharacterInfo, CharactersList, Label } from "./Styles";

export default function Starships() {
  const navigate = useNavigate();

  const { data, loading } = useQuery(GET_ALL_STARSHIPS);

  const onSelectShip = (id: string) => {
    navigate(`/starships/${id}`);
  };

  return (
    <div>
      {loading && <div>LOADING....</div>}

      {!loading && data && (
        <Fragment>
          <Label>Total starships: {data.allStarships.totalCount}</Label>
          <CharactersList>
            {data.allStarships.starships.map((starship: any) => (
              <CharacterCard
                width="30%"
                key={starship.id}
                onClick={() => onSelectShip(starship.id)}
              >
                <CharacterInfo>
                  <Label>Name:</Label> {starship.name}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Model:</Label> {starship.model}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Manufactures:</Label>{" "}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    {starship.manufacturers.map((terrain: any) => (
                      <div
                        key={terrain}
                        style={{
                          marginRight: "5px",
                        }}
                      >
                        {terrain},
                      </div>
                    ))}
                  </div>
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Starship Class:</Label> {starship.starshipClass}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Passengers:</Label> {starship.passengers}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Crew:</Label> {starship.crew}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Length:</Label> {starship.length}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Cargo capacity:</Label> {starship.cargoCapacity}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Consumables:</Label> {starship.consumables}
                </CharacterInfo>
                <CharacterInfo>
                  <Label>Cost in credits:</Label> {starship.costInCredits}
                </CharacterInfo>
              </CharacterCard>
            ))}
          </CharactersList>
        </Fragment>
      )}
    </div>
  );
}
