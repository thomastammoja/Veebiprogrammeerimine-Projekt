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
import FiltersPanel from "./FiltersPanel";

function Header() {
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(query);
  };

  const toggleFiltersPanel = (e) => {
    filtersOpen ? setFiltersOpen(false) : setFiltersOpen(true);
  };

  console.log("HEADER QUERY >>>", query);

  return (
    <div className="header">
      <div className="header__topRowContainer">
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
      <div className="header__bottomRowContainer">
        <MenuIcon
          className="header__menuButton"
          onClick={(e) => toggleFiltersPanel()}
        />
      </div>
      <div className="header__filtersPanel">
        <FiltersPanel
          open={filtersOpen}
          onClose={(e) => toggleFiltersPanel()}
        />
      </div>
    </div>
  );
}

export default Header;
