import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LibraryContext } from '../../context/LibraryContext';
import './BookDetailsPage.css';

const BookDetailsPage = () => {
  const { id } = useParams();
  const { books, addToLibrary } = useContext(LibraryContext);
  const book = books.find(b => b.id === parseInt(id));

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Publication Year:</strong> {book.publication_year}</p>
      <button onClick={() => addToLibrary(book)}>Add to My Library</button>
    </div>
  );
};

export default BookDetailsPage;

