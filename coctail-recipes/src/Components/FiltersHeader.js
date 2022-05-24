import React, { useState } from "react";
import { useSelector } from "react-redux";

//Components
import FiltersPanel from "./FiltersPanel";

//Icons
import FilterListIcon from "@mui/icons-material/FilterList";

//Styles
import "./FiltersHeader.css";

function FiltersHeader() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState(false);

  return (
    <div className="filtersHeader">
      <div className="filtersHeader__menuButtonContainer">
        <FilterListIcon
          className="filtersHeader__menuButton"
          onClick={() => setFiltersOpen(true)}
        />

        {filters ? <label>Filtrid on rakendatud</label> : null}
      </div>
      <div className="filtersHeader__filtersPanel">
        <FiltersPanel
          open={filtersOpen}
          onClose={(e) => setFiltersOpen(false)}
          setFilters={(e) => setFilters(e)}
        />
      </div>
    </div>
  );
}

export default FiltersHeader;
