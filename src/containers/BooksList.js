import React, { Component } from 'react';
import { connect } from 'react-redux'

class BooksList extends Component {
  render = () => {
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
            
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect()(BooksList)