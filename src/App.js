import React from 'react';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';

function App() {
  return (
    <div>
      <h1>Magic-Books Bookstore</h1>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
