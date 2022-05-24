import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//Components
import Shuffle from "./Shuffle";

//Icons
import SearchIcon from "@mui/icons-material/Search";
import Logo from "@mui/icons-material/LocalBar";

//Stylesheet
import "./Header.css";

function Header() {
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <div className="header">
      <div className="header__topRowContainer">
        <div className="header__logo">
          <Link to="/">
            <Logo className="header__logoIcon" />
          </Link>
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
    </div>
  );
}

export default Header;
