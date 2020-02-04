import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const catOptions = categories.map(category => (
    <option
      value={category}
      key={Math.random()}
    >
      {category}
    </option>
  ));
  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
          <input type="text" id="title" />
        </label>

        <label htmlFor="category">
          Category:
          <select id="category">
            {catOptions}
          </select>
        </label>

        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default BooksForm;
