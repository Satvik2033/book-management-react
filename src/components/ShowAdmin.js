// src/ShowAdmin.js
import React, { useState } from 'react';

const ShowAdmin = ({ bookshelf }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Filter bookshelf based on search term
    const results = bookshelf.filter(
      (book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleEdit = (id) => {
    // TODO: Implement logic to edit a book
    console.log('Editing book with id:', id);
  };

  const handleDelete = (id) => {
    // TODO: Implement logic to delete a book
    console.log('Deleting book with id:', id);
  };

  return (
    <div>
      <h1>Show Admin</h1>
      <label>
        Search by ISBN or Book Name:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <h2>Search Results</h2>
      <ul>
        {searchResults.map((book) => (
          <li key={book.isbn}>
            {book.name} - ISBN: {book.isbn}
            <button type="button" onClick={() => handleEdit(book.isbn)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDelete(book.isbn)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowAdmin;
