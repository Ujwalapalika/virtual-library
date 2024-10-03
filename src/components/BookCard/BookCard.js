import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book, removeFromLibrary }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
      {removeFromLibrary && (
        <button onClick={() => removeFromLibrary(book.id)}>Remove from My Library</button>
      )}
    </div>
  );
};

export default BookCard;
