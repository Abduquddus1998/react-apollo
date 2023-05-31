import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MainLoader from "Components/MainLoader";
import { RootWrapper, GlobalStyles } from "./globalStyles";
import Planet from "./Components/Planet";

const Films = lazy(() => import("Components/Films"));
const Landing = lazy(() => import("Containers/Landing"));
const Starships = lazy(() => import("Components/Starships"));
const Planets = lazy(() => import("Components/Planets"));
const Film = lazy(() => import("Components/Film"));
const Starship = lazy(() => import("Components/Starship"));

function App() {
  return (
    <Suspense fallback={<MainLoader />}>
      <RootWrapper>
        <GlobalStyles />
        <Routes>
          <Route element={<Landing />}>
            <Route path="/" element={<Films />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/:filmId" element={<Film />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:planetId" element={<Planet />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/starships/:starshipId" element={<Starship />} />
          </Route>
        </Routes>
      </RootWrapper>
    </Suspense>
  );
}

export default App;
