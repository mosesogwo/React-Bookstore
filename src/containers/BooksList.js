import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = props => {
  const { books, removeBook } = props;

  const handleRemoveBook = book => (removeBook(book));

  const handleFilterChange = filter => 

  const booksRows = books.map(book => (
    <Book
      book={book}
      key={book.id}
      removeBook={handleRemoveBook}
    />
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>  </th>
          </tr>
        </thead>
        <tbody>
          {booksRows}
        </tbody>
      </table>
      <CategoryFilter />
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(REMOVE_BOOK(book)),
  changeFilter: filter => dispatch(CHANGE_FILTER(filter)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
