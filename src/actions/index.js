const CREATE_BOOK = book => ({
  type: 'CREATE_BOOK',
  book,
});

const REMOVE_BOOK = book => (
  {
    type: 'REMOVE_BOOK',
    id: book.id,
  }
);

const CHANGE_FILTER = newFilter => ({
  type: 'CHANGE_FILTER',
  filter: newFilter,
});

export { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER };
