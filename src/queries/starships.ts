import { gql } from "@apollo/client";

export const GET_ALL_STARSHIPS = gql`
  query AllStarships {
    allStarships {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
      starships {
        cargoCapacity
        consumables
        costInCredits
        crew
        hyperdriveRating
        id
        length
        manufacturers
        maxAtmospheringSpeed
        model
        name
        passengers
        starshipClass
      }
    }
  }
`;

export const GET_STARSHIP = gql`
  query Starship($starshipId: ID) {
    starship(id: $starshipId) {
      costInCredits
      consumables
      cargoCapacity
      crew
      id
      length
      manufacturers
      maxAtmospheringSpeed
      hyperdriveRating
      model
      name
      passengers
      starshipClass
      pilotConnection {
        totalCount
        pilots {
          id
          name
          gender
          birthYear
          height
          mass
        }
      }
      filmConnection {
        totalCount
        films {
          title
          releaseDate
          producers
          id
          director
        }
      }
    }
  }
`;
