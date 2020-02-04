import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

class BooksList extends Component {
  render = () => {
    const booksRows = this.props.books.map((book) => {
      return(<Book book={book} />)
    })
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
    )
  }
}
const mapStateToProps = (state) => ({
  books: state.books
})
export default connect(mapStateToProps)(BooksList)