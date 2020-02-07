import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = props => {
  const filterCats = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const catOptions = filterCats.map(category => (
    <option
      value={category}
      key={Math.random()}
      className="select-option"
    >
      {category}
    </option>
  ));

  const { changeFilter, currentFilter } = props;

  return (
    <div className="filter-form">
      <form>
        <label htmlFor="filter">
          Filter by category:
          <select name="filter" id="filter" value={currentFilter} onChange={event => changeFilter(event.target.value)}>
            {catOptions}
          </select>
        </label>
      </form>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default CategoryFilter;
