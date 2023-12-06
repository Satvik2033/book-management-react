import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import ShowAdmin from "./components/ShowAdmin";
import ShowBook from "./components/ShowBooks";

function App() {
  const [bookshelf, setBookshelf] = useState([]);

  return (
    <Routes>
      <Route
        path="/admin"
        element={<Admin bookshelf={bookshelf} setBookshelf={setBookshelf} />}
      />
      <Route
        path="/show-admin"
        element={
          <ShowAdmin bookshelf={bookshelf} setBookshelf={setBookshelf} />
        }
      />
      <Route
        path="/show-book/:isbn"
        element={<ShowBook bookshelf={bookshelf} setBookshelf={setBookshelf} />}
      />
    </Routes>
  );
}

export default App;
