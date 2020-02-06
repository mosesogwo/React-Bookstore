import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = props => {
  const {
    books, removeBook, changeFilter, filter,
  } = props;

  const handleRemoveBook = book => (removeBook(book));

  const handleFilterChange = filter => (changeFilter(filter));

  const filteredBooks = filter === 'All' ? (books) : (books.filter(book => book.category === filter));

  const booksRows = filteredBooks.map(book => (
    <Book
      book={book}
      key={book.id}
      removeBook={handleRemoveBook}
    />
  ));

  return (
    <div className='books'>
      <CategoryFilter currentFilter={filter} changeFilter={handleFilterChange} />
      {booksRows}
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(REMOVE_BOOK(book)),
  changeFilter: filter => dispatch(CHANGE_FILTER(filter)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
