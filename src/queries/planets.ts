import { gql } from "@apollo/client";

export const GET_ALL_PLANETS = gql`
  query AllPlanets {
    allPlanets {
      totalCount
      planets {
        id
        name
        population
        diameter
        climates
      }
    }
  }
`;

export const GET_PLANET = gql`
  query Planet($planetId: ID) {
    planet(id: $planetId) {
      id
      name
      gravity
      diameter
      climates
      orbitalPeriod
      population
      rotationPeriod
      surfaceWater
      terrains
      filmConnection {
        totalCount
        films {
          title
          releaseDate
          producers
          openingCrawl
          id
          director
        }
      }
    }
  }
`;
