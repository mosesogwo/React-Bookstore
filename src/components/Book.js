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
    <div className='book'>
      <div className='book-details'>
        <p className="book-cat">{book.category}</p>
        <p className="book-title">{ book.title }</p>
        <p className="book-author">Author's Name</p>
      </div>
      <a href='#' className="remove-book" onClick={() => removeBook(book)}> Remove </a>
    </div>
  )
};


Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  removeBook: PropTypes.func.isRequired,
};


export default Book;
