import React from "react";
import { HeaderWrapper, NavigationItem } from "./Styles";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      <NavigationItem>
        <NavLink to="/films">
          <p>Films</p>
        </NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink to="/starships">
          <p>Starships</p>
        </NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink to="/planets">
          <p>Planets</p>
        </NavLink>
      </NavigationItem>
    </HeaderWrapper>
  );
}
