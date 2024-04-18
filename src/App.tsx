import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import AnimalPage from './components/Animal';

const App: React.FC = () => {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/animals/:id" element={<AnimalPage />} />
      </Routes>
    </Router>
 );
}

export default App;
