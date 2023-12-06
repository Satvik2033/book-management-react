import React, { useState } from 'react';

const Admin = () => {
  const [book, setBook] = useState({
    name: '',
    isbn: '',
    category: '',
    rowNo: '',
    bookCount: '',
    cost: '',
    availability: '',
  });

  const [bookshelf, setBookshelf] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleAddBook = () => {
    if (!book.name || !book.isbn || !book.category || !book.rowNo || !book.bookCount || !book.cost || !book.availability) {
      console.log('Please fill out all fields');
      return;
    }

    // Check if the book with the same ISBN already exists
    if (bookshelf.find((b) => b.isbn === book.isbn)) {
      console.log('Book with the same ISBN already exists');
      return;
    }

    setBookshelf([...bookshelf, book]);

    setBook({
      name: '',
      isbn: '',
      category: '',
      rowNo: '',
      bookCount: '',
      cost: '',
      availability: '',
    });

    console.log('Book added to the bookshelf:', book);
  };

  const handleEditBook = (isbn) => {
    // Find the book with the given ISBN
    const editingBook = bookshelf.find((b) => b.isbn === isbn);

    if (!editingBook) {
      console.log('Book not found for editing');
      return;
    }

    // Update the book state for editing
    setBook({ ...editingBook });
    // Remove the book from the bookshelf
    setBookshelf(bookshelf.filter((b) => b.isbn !== isbn));
  };

  const handleDeleteBook = (isbn) => {
    // Remove the book from the bookshelf
    setBookshelf(bookshelf.filter((b) => b.isbn !== isbn));
    console.log('Book deleted with ISBN:', isbn);
  };

  return (
    <div>
      <h1>Admin</h1>
      <form>
        <label>
          Book Name:
          <input type="text" name="name" value={book.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          ISBN:
          <input type="text" name="isbn" value={book.isbn} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="category" value={book.category} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Row No:
          <input type="text" name="rowNo" value={book.rowNo} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Book Count:
          <input type="text" name="bookCount" value={book.bookCount} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Cost:
          <input type="text" name="cost" value={book.cost} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Availability:
          <input type="text" name="availability" value={book.availability} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
        <br />
      </form>

      <h2>Bookshelf</h2>
      <ul>
        {bookshelf.map((b) => (
          <li key={b.isbn}>
            {b.name} - ISBN: {b.isbn}
            <button type="button" onClick={() => handleEditBook(b.isbn)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDeleteBook(b.isbn)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
