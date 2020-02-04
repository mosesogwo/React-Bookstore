import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book } = props;
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
};

export default Book;

Book.PropTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
}
