import React from 'react';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';

function App() {
  return (
    <div>
      <header className="">
        <h1 id="home">Magic Books CMS</h1>
        <nav>
          <a href="#home">BOOKS</a>
          <a href="#home">CATEGORIES</a>
        </nav>
      </header>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
