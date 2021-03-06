import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, removeBook } = props;

  return (
    <div className="book">
      <div className="book-details">
        <p className="book-cat">{book.category}</p>
        <p className="book-title">{ book.title }</p>
        <p className="book-author">Author&apos;s Name</p>
      </div>
      <button type="button" className="remove-book" onClick={() => removeBook(book)}> REMOVE </button>
    </div>
  );
};


Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  removeBook: PropTypes.func.isRequired,
};


export default Book;
