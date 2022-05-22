import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//Components
import Shuffle from "./Shuffle";

//Icons
import SearchIcon from "@mui/icons-material/Search";
import Logo from "@mui/icons-material/LocalBar";
import MenuIcon from "@mui/icons-material/Menu";

//Stylesheet
import "./Header.css";

function Header() {
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(query);
  };

  console.log("HEADER QUERY >>>", query);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <NavLink to="/">
            <Logo className="header__logoIcon" />
          </NavLink>
        </div>

        <div className="header__search" onSubmit={submitHandler}>
          <input
            className="header__searchInput"
            type="text"
            placeholder="Otsi kokteili..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link to={`/searchCocktail/${query}`}>
            <SearchIcon className="header__searchIcon" />
          </Link>
        </div>

        <div className="header__nav">
          <NavLink to="/alcohol">
            <a className="header__option">Alkohoolsed</a>
          </NavLink>
          <NavLink to="/nonAlcohol">
            <a className="header__option">Mittealkohoolsed</a>
          </NavLink>

          <Shuffle theme="dark" />
        </div>
      </div>
      <div className="header__navBar">
        <MenuIcon className="header__menuButton" />
      </div>
    </div>
  );
}

export default Header;
