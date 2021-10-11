import React from 'react';
import Books from './Books';

const BookList = () => {
  const books = [
    {
      id: 1, name: 'Avenger', category: 'Psybbb', author: 'lolo',
    },
  ];
  return (
    <ul>
      {books.map((book) => (
        <Books
          key={book.id}
          name={book.name}
          author={book.author}
        />
      ))}
    </ul>
  );
};

export default BookList;
