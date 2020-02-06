import React from 'react';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';

function App() {
  return (
    <div>
      <header className=''>
        <h1>Magic Books CMS</h1>
        <nav>
          <a href='#'>BOOKS</a>
          <a href='#'>CATEGORIES</a>
        </nav>
      </header>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
