import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "..";

//Components
import { UpdateActiveFilters } from "../actions/RecipesActions";

//Icons
import CloseIcon from "@mui/icons-material/Close";

//Styles
import "./FiltersPanel.css";

function FiltersPanel({ open, onClose, filtersSelected }) {
  const filters = useSelector((state) => state.typeFilters);
  const [searchColumns, setSearchColumns] = useState(
    filters.length > 0 ? filters : []
  );

  const filterColumns = [
    "viin",
    "liköör",
    "gin",
    "rumm",
    "vermut",
    "viski",
    "tekiila",
    "konjak",
    "brändi",
    "Šampanja",
    "Õlu",
    "aperatiiv",
  ];

  useEffect(() => {
    store.dispatch(UpdateActiveFilters(searchColumns));
  }, [searchColumns]);

  const handleEscape = (e) => {
    if (e.key === "Escape") onClose();
  };

  const handleKeydown = (e) => {
    return handleEscape && handleEscape(e);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  if (!open) return null;
  return (
    <div className="filtersPanel" onClick={onClose}>
      <div
        className="filtersPanel__container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseIcon onClick={onClose} className="filtersPanel__closeIcon" />
        <button
          className="filtersPanel__clearFiltersButton"
          onClick={(e) => setSearchColumns([])}
        >
          Eemalda filtrid
        </button>
        <h5>Alkoholi kategooria</h5>
        <form className="filtersPanel__form">
          {filterColumns.map((column) => (
            <label className="filterPanel__formItem">
              <input
                type="checkbox"
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column]
                  );
                }}
              />
              {" " + column.charAt(0).toUpperCase() + column.slice(1)}
            </label>
          ))}
        </form>
      </div>
    </div>
  );
}

export default FiltersPanel;
