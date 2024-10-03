import React, { useContext } from 'react';
import { LibraryContext } from '../../context/LibraryContext';
import BookList from '../../components/BookList/BookList';
import SearchBar from '../../components/SearchBar/SearchBar';
import './HomePage.css';

const HomePage = () => {
  const { books } = useContext(LibraryContext);

  return (
    <div className="home-page">
      <h2>Book Library</h2>
      <SearchBar />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;

