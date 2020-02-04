import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;
  const booksRows = books.map(book => (<Book book={book} key={Math.random()} />));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {booksRows}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default connect(mapStateToProps)(BooksList);
