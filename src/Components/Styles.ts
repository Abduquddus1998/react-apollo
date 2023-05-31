import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 0.8rem 2rem;
  position: fixed;
  height: 40px;
  width: calc(100% - 4rem);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #fff;
  z-index: 3;
  -webkit-box-shadow: 0 4px 16px -2px rgb(215, 215, 215);
  -moz-box-shadow: 0 4px 16px -2px rgb(215, 215, 215);
  box-shadow: 0 4px 16px -2px rgb(215, 215, 215);

  @media (max-width: 1050px) {
    width: calc(100% - 100px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem;
    display: flex;
  }
`;

export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 45px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
    color: #32374d;

    &:hover {
      opacity: 0.6;
    }

    @media (max-width: 1050px) {
      flex-direction: column;
      justify-content: center;
      padding: 0.5rem;
    }
  }

  .active {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
    background-color: #fff;
    border-radius: 16px 0 0 16px;
    transition: all 200ms ease-in;
    position: relative;

    @media (max-width: 1050px) {
      padding: 0.5rem;
    }

    &:hover {
      opacity: 1;
    }

    p {
      color: red;
    }
  }

  @media (max-width: 1050px) {
    height: auto;
  }

  p {
    margin: 0 0 0 1rem;
    font-size: 18px;
    line-height: 19px;
    font-weight: 300;
    color: #32374d;
  }
`;

export const FilmsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const FilmCard = styled.div`
  max-width: 30%;
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #8f9493;
  border-radius: 10px;
  cursor: pointer;
`;

export const FilmInfo = styled.div`
  display: flex;
  margin-top: 0.5rem;

  &:last-child {
    opacity: 0.6;
    font-style: italic;
  }

  p {
    margin: 0 0 0 0.5rem;
    display: flex;
  }
`;

export const Label = styled.div`
  color: #000;
  font-weight: 600;
`;

export const FilmWrapper = styled.div``;

export const Title = styled.div<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize || "24px"};
  font-weight: 600;
  color: #000;
  text-align: center;
`;

export const FilmDirector = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  text-align: center;
  margin: 1rem 0;
`;

export const FilmCrawl = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  div {
    width: 80%;
    font-style: italic;
    opacity: 0.6;
  }
`;

export const CharactersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.5rem 0;
`;

export const CharacterCard = styled.div<{ width?: string }>`
  border: 1px solid #8f9493;
  padding: 1rem;
  border-radius: 10px;
  margin: 0 1rem 1rem 0;
  width: ${(props) => props.width || "180px"};
  cursor: pointer;
`;

export const CharacterInfo = styled.div`
  display: flex;
`;

export const StarShipInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
`;
