import React, { Component } from 'react';

class BooksForm extends Component {
  categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

  categoriesOption = this.categories.map((category) => {
    return(
    <option value={category}>{category}</option>
    )
  })

  render = () => {
    return(
      <div>
        <form>
          <label htmlFor='title'>Title: </label>
          <input type='text' id='title' />

          <label htmlFor='category'>Category: </label>
          <select id='category'>
            <this.categoriesOption />
          </select>

          <button type='button'>Submit</button>
        </form>
      </div>
    )
  }
}