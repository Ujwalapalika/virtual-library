import React, { useState, useContext } from 'react';
import { LibraryContext } from '../../context/LibraryContext';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { books } = useContext(LibraryContext);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.genre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title, author, or genre"
      />
      <div className="results">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <p key={book.id}>{book.title}</p>)
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

