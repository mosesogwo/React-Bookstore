import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CREATE_BOOK } from '../actions';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
  }

  handleChange = event => {
    if (event.target.id === 'title') {
      const title = event.target.value;
      this.setState(prevState => ({
        ...prevState,
        title,
      }));
    } else if (event.target.id === 'category') {
      const cat = event.target.value;
      this.setState(prevState => ({
        ...prevState,
        category: cat,
      }));
    }
  }

  handleSubmit = () => {
    const { title, category } = this.state;
    const { createBook } = this.props;
    const newBook = {
      id: Math.random(),
      title,
      category,
    };
    createBook(newBook);
    this.setState({
      title: '',
      category: 'Action',
    });
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
            <input type="text" id="title" onChange={this.handleChange} />
          </label>

          <label htmlFor="category">
            Category:
            <select id="category" name="category" value={this.state.category} onChange={this.handleChange}>
              {catOptions}
            </select>
          </label>

          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(CREATE_BOOK(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
