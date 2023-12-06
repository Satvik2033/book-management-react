import React from 'react';
import { useParams } from 'react-router-dom';

const ShowBook = ({ bookshelf }) => {
  const { isbn } = useParams();

  // Find the book with the given ISBN from the bookshelf
  const selectedBook = bookshelf.find((book) => book.isbn === isbn);

  if (!selectedBook) {
    return <div>No book found with the specified ISBN.</div>;
  }

  return (
    <div>
      <h1>Show Book</h1>
      <h2>{selectedBook.name}</h2>
      <p>ISBN: {selectedBook.isbn}</p>
      <p>Category: {selectedBook.category}</p>
      <p>Row No: {selectedBook.rowNo}</p>
      <p>Book Count: {selectedBook.bookCount}</p>
      <p>Cost: {selectedBook.cost}</p>
      <p>Availability: {selectedBook.availability}</p>
    </div>
  );
};

export default ShowBook;
