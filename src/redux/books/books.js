const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = {
  books: [{ title: 'Book 1', id: 0, category: 'Fairy Tale' }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        books: [...state.books, action.payload.bookState],
      };
    case REMOVE:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

const addBook = (book) => ({
  type: ADD,
  payload: book,
});

const removeBook = (book) => ({
  type: REMOVE,
  payload: book,
});

export { reducer, addBook, removeBook };
