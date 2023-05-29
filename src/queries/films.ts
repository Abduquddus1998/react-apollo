import { gql } from "@apollo/client";

export const GET_ALL_FILMS = gql`
  query AllFilms {
    allFilms {
      films {
        created
        director
        edited
        id
        openingCrawl
        releaseDate
        title
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`;

export const GET_FILM = gql`
  query Film($filmId: ID) {
    film(id: $filmId) {
      created
      director
      edited
      id
      openingCrawl
      releaseDate
      title
      characterConnection {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        characters {
          birthYear
          eyeColor
          gender
          hairColor
          height
          id
          mass
          name
          skinColor
        }
      }
      planetConnection {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        planets {
          climates
          created
          diameter
          gravity
          id
          name
          orbitalPeriod
          population
          rotationPeriod
          surfaceWater
          terrains
        }
      }
    }
  }
`;
