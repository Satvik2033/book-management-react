import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin';
import ShowAdmin from './components/ShowAdmin';
import ShowBook from './components/ShowBooks';

function App() {
  const [bookshelf, setBookshelf] = useState([]);

  return (
    <Router>
      <Switch>
        <Route
          path="/admin"
          render={() => <Admin bookshelf={bookshelf} setBookshelf={setBookshelf} />}
        />
        <Route
          path="/show-admin"
          render={() => <ShowAdmin bookshelf={bookshelf} setBookshelf={setBookshelf} />}
        />
        <Route
          path="/show-book/:isbn"
          render={() => <ShowBook bookshelf={bookshelf} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
