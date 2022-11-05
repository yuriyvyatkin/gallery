import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Gallery from './features/gallery/Gallery';
import Item from './features/gallery/Item';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <main className="main">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/nft/:id" element={<Item />} />
            <Route path="*" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
