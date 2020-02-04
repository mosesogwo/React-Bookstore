const CREATE_BOOK = (book) => {
  return ({
    type: 'CREATE_BOOK',
    book,
  })
}

const REMOVE_BOOK = (book) => {
  return({
    type: 'REMOVE_BOOK',
    id: book.id,
  })
}

export { CREATE_BOOK, REMOVE_BOOK }