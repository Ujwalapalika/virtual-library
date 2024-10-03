import React, { createContext, useState } from 'react';
import booksData from '../data/booksData';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [books] = useState(booksData.books);
  const [library, setLibrary] = useState([]);

  const addToLibrary = (book) => {
    if (!library.some(item => item.id === book.id)) {
      setLibrary([...library, book]);
    }
  };

  const removeFromLibrary = (id) => {
    setLibrary(library.filter(book => book.id !== id));
  };

  return (
    <LibraryContext.Provider value={{ books, library, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
