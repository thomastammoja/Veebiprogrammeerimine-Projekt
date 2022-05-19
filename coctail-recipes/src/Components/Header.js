import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "@mui/icons-material/LocalBar";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { Link } from "react-router-dom";

function Header() {
  const [q, setQ] = useState("");
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <Logo className="header__logoIcon" />
        </div>
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Otsi kokteili pealkirja järgi"
          onChange={(e) => setQ(e.target.value)}
        />
        <Link to="/searchCocktail">
          <SearchIcon className="header__searchIcon" />
        </Link>
      </div>

      <div className="header__nav">
        <Link to="/alcohol">
          <div className="header__option">
            <span className="header__optionLineOne">Alkohoolsed</span>
          </div>
        </Link>

        <Link to="/nonAlcohol">
          <div className="header__option">
            <span className="header__optionLineOne">Mittealkohoolsed</span>
          </div>
        </Link>

        <Link to="/randomRecipe">
          <div className="header__optionShuffle">
            <ShuffleIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
