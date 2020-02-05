import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, removeBook } = props;
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type='button' onClick={removeBook(book)}> Remove </button></td>
    </tr>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
