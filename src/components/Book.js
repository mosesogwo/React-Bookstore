import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, removeBook } = props;

  // return (
  //   <tr>
  //     <td>{book.id}</td>
  //     <td>{book.title}</td>
  //     <td>{book.category}</td>
  //     <td><button type="button" onClick={() => removeBook(book)}> Remove </button></td>
  //   </tr>
  // );

  return (
    <div>
      <div>{book.category}</div>
      <div>
        { book.title }
        <byline>Author's Name</byline>
      </div>
    <div><button type="button" onClick={() => removeBook(book)}> Remove </button></div>
    </div>
  )
};


Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  removeBook: PropTypes.func.isRequired,
};


export default Book;
