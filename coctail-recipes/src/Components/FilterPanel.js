import React from "react";
import "./FilterPanel.css";

function FilterPanel() {
  return (
    <div className="filterPanel">
      <div className="filterPanel__container">
        <div className="filterPanel__category">
          {/* Kategooria alkohoolne/mitte */}
          <button></button>
        </div>

        <div className="filterPanel__drinkType">{/* Sisaldab jooke */}</div>

        <div className="filterPanel__glassType">{/* Klaasitüüp */}</div>

        <div className="filterPanel__iceType">{/* Jää tüüp */}</div>

        <div className="filterPanel__rating">{/* Hinnang */}</div>
      </div>
    </div>
  );
}

export default FilterPanel;
