import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MainLoader from "Components/MainLoader";
import { RootWrapper, GlobalStyles } from "./globalStyles";

const Films = lazy(() => import("Components/Films"));
const Landing = lazy(() => import("Containers/Landing"));
const Starships = lazy(() => import("Components/Starships"));
const Planets = lazy(() => import("Components/Planets"));

function App() {
  return (
    <Suspense fallback={<MainLoader />}>
      <RootWrapper>
        <GlobalStyles />
        <Routes>
          <Route element={<Landing />}>
            <Route path="/" element={<Films />} />
            <Route path="/films" element={<Films />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/starships" element={<Starships />} />
          </Route>
        </Routes>
      </RootWrapper>
    </Suspense>
  );
}

export default App;
