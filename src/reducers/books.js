const initBooks = [
  { id: Math.random() * 100, title: 'The Adventures of Funa', category: 'Kids' },
  { id: Math.random() * 100, title: 'Save your nation, Become a Legend', category: 'Learning' },
  { id: Math.random() * 100, title: 'The Journey of the Nations', category: 'History' },
];

const booksReducer = (state = initBooks, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return (state.filter(book => book.id !== action.id));
    default:
      return state;
  }
};

export default booksReducer;
