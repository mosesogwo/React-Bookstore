import React, { Component } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: '',
    }
  }

  handleChange = (event) => {
    if (event.target.id === 'title'){
      this.setState({
        ...this.state,
        title: event.target.value,
      })
      console.log(event.target.value)
    } else if (event.target.id === 'category'){
      this.setState({
        ...this.state,
        category: event.target.value,
      })
      console.log(event.target.value)
    }
  }

  render = () => {
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
  }
};

export default BooksForm;
