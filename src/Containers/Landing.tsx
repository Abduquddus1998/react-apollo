import { Outlet } from "react-router-dom";

import Header from "Components/Header";

import { LandingWrapper, Main } from "./ContainerStyles";

export default function Landing() {
  return (
    <LandingWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </LandingWrapper>
  );
}
