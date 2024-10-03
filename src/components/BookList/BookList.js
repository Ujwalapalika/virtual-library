import React from 'react';
import BookCard from '../BookCard/BookCard';
import './BookList.css';

const BookList = ({ books, removeFromLibrary }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.id} book={book} removeFromLibrary={removeFromLibrary} />
      ))}
    </div>
  );
};

export default BookList;

