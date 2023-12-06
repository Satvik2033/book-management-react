// QRScanner.js
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useHistory } from 'react-router-dom';

const QRScanner = ({ bookshelf }) => {
  const [result, setResult] = useState(null);
  const history = useHistory();

  const handleScan = (data) => {
    if (data) {
      // Find the book with the scanned ISBN from the bookshelf
      const scannedBook = bookshelf.find((book) => book.isbn === data);

      if (scannedBook) {
        // Redirect to the ShowBook page for the scanned book
        history.push(`/show-book/${scannedBook.isbn}`);
      } else {
        setResult('Book not found with the scanned ISBN.');
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h1>QR Scanner</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && <p>{result}</p>}
    </div>
  );
};

export default QRScanner;
