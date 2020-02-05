import React, { Component } from 'react';
import { CREATE_BOOK } from '../actions';
import { connect } from 'react-redux';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    }
  }

  handleChange = event => {
    if (event.target.id === 'title'){
      this.setState({
        ...this.state,
        title: event.target.value,
      })
    } else if (event.target.id === 'category'){
      this.setState({
        ...this.state,
        category: event.target.value,
      })
    }
  }

  handleSubmit = () => {
    const newBook = {
      id: Math.random(),
      title: this.state.title,
      category: this.state.category,
    }
    this.props.createBook(newBook);
    this.setState({
      ...this.state,
      title: '',
      category: 'Action',
    })
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
          <input type="text" id="title" onChange={this.handleChange}/>
          </label>

          <label htmlFor="category">
            Category:
          <select id="category" name='category' value={this.state.category} onChange={this.handleChange}>
              {catOptions}
            </select>
          </label>

          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createBook: book => dispatch(CREATE_BOOK(book)),
  }
}

export default connect(null, mapDispatchToProps)(BooksForm);
