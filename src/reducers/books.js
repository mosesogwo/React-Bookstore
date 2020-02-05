const initBooks = [
  { id: Math.random() * 100, title: 'Initial Book 1', category: 'Kids' },
  { id: Math.random() * 100, title: 'Initial Book 2', category: 'Learning' },
  { id: Math.random() * 100, title: 'Initial Book 3', category: 'History' },
];

const booksReducer = (state = initBooks, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
