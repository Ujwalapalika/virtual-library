import React, { useContext } from 'react';
import { LibraryContext } from '../../context/LibraryContext';
import BookList from '../../components/BookList/BookList';
import './MyLibraryPage.css';

const MyLibraryPage = () => {
  const { library, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div className="my-library">
      <h2>My Library</h2>
      <BookList books={library} removeFromLibrary={removeFromLibrary} />
    </div>
  );
};

export default MyLibraryPage;

