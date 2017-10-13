import React, { Component } from "react";

import Filter from "./Filter";
import FilteredFruitList from "./FilteredFruitList.js";

function FruitBasket(props) {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleFilterChange} filters={props.filters} />
      <FilteredFruitList filter={props.selectedFilter} items={props.items} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function() {}
};

export default FruitBasket;
