import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index'
const BooksList = props => {
  const { books } = props;

  const handleRemoveBook = (book) => {
    this.props.removeBook(book);
  }

  const booksRows = books.map(book => (<Book book={book} key={Math.random()} removeBook={this.handleRemoveBook} />));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th></th>
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

const mapDispatchToProps = dispatch => ({
  removeBook: (book) => dispatch(REMOVE_BOOK(book)),
})

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
