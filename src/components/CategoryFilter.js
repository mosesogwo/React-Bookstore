import React from 'react';

const CategoryFilter = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const catOptions = categories.map(category => (
    <option
      value={category}
      key={Math.random()}
    >
      {category}
    </option>
  ));


  return(
    <form>
      <select>
        <option value='All' key={Math.random()}>All</option>
        {catOptions}
      </select>
    </form>
  )
}

export default CategoryFilter;