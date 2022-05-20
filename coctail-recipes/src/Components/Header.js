import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import Logo from "@mui/icons-material/LocalBar";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import MenuIcon from "@mui/icons-material/Menu";

import "./Header.css";

function Header() {
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(query);
  };
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <Logo className="header__logoIcon" />
          </Link>
        </div>

        <div className="header__search" onSubmit={submitHandler}>
          <input
            className="header__searchInput"
            type="text"
            placeholder="Otsi kokteili pealkirja järgi"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchIcon className="header__searchIcon" onClick={submitHandler} />
        </div>

        <div className="header__nav">
          <Link to="/alcohol">
            <span className="header__option">Alkohoolsed</span>
          </Link>

          <Link to="/nonAlcohol">
            <span className="header__option">Mittealkohoolsed</span>
          </Link>

          <Link to="/randomRecipe">
            <a href="" className="header__optionShuffle">
              <ShuffleIcon />
            </a>
          </Link>
        </div>
      </div>

      <div className="header__navBar">
        <MenuIcon className="header__menuButton" />
      </div>
    </div>
  );
}

export default Header;
