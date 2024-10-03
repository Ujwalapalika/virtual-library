import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LibraryProvider } from './context/LibraryContext';
import HomePage from './pages/HomePage/HomePage';
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage/MyLibraryPage';

function App() {
  return (
    <LibraryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/library" element={<MyLibraryPage />} />
        </Routes>
      </Router>
    </LibraryProvider>
  );
}

export default App;

