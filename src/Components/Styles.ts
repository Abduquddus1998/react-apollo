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
