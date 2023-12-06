// App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Admin from './components/Admin';
import ShowAdmin from './components/ShowAdmin';
import ShowBooks from './components/ShowBooks';
import QRScanner from './components/QRScanner';

function App() {
  const [bookshelf, setBookshelf] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to the "/admin" route when the component is mounted
    navigate('/admin');
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/admin"
        element={<Admin bookshelf={bookshelf} setBookshelf={setBookshelf} />}
      />
      <Route
        path="/show-admin"
        element={<ShowAdmin bookshelf={bookshelf} setBookshelf={setBookshelf} />}
      />
      <Route
        path="/show-book/:isbn"
        element={<ShowBooks bookshelf={bookshelf} setBookshelf={setBookshelf} />}
      />
      <Route
        path="/qr-scanner"
        element={<QRScanner bookshelf={bookshelf} />}
      />
    </Routes>
  );
}

export default App;
