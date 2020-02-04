import { initBooks } from '../index';

const booksReducer = (state=initBooks, action) => {
  switch(action.type){
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state
  }
}

export default booksReducer;