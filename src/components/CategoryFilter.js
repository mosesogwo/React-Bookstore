import React from 'react';

const CategoryFilter = props => {
  const filterCats = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const catOptions = filterCats.map(category => (
    <option
      value={category}
      key={Math.random()}
    >
      {category}
    </option>
  ));

  const { changeFilter, currentFilter } = props

  return(
    <form>
      <label htmlFor='filter'>Filter: </label>
      <select name='filter' id='filter' value={currentFilter} onChange={(event)=>changeFilter(event.target.value)}>
        {catOptions}
      </select>
    </form>
  )
}

export default CategoryFilter;