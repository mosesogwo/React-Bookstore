import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CREATE_BOOK } from '../actions';

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

  handleSubmit = event => {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    const newBook = {
      id: Math.random(),
      title,
      category,
    };
    if (newBook.title !== '') {
      createBook(newBook);
      this.setState({
        title: '',
        category: 'Action',
      });
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

    const { title: stateTitle, category: stateCategory } = this.state;

    return (
      <div className="books-form-div">
        <h3>ADD NEW BOOK</h3>
        <form className="books-form">
          <input
            type="text"
            id="title"
            value={stateTitle}
            placeholder="TItle"
            onChange={this.handleChange}
          />

          <select
            id="category"
            name="category"
            value={stateCategory}
            onChange={this.handleChange}
          >
            {catOptions}
          </select>

          <button type="submit" onClick={event => this.handleSubmit(event)}>ADD BOOK</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(CREATE_BOOK(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(BooksForm);
