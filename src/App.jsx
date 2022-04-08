
import './App.css';

import Home from './home/Home'
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // <Router>
    //     <Routes>
    //       <Route path="/h-app/" element={<Home />}/>
    //     </Routes>
    // </Router>
    <Home />
  );
}

export default App;
