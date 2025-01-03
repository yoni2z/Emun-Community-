import React from 'react';
import Blogs from './pages/Blogs';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={<Blogs />} />
      </Router>
    </>
  )
}

export default App;