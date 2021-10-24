// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactPlayer from 'react-player';
import { Link, Route } from "react-router-dom";
import Content from './components/Content.js';
import ShowContent from "./components/ShowContent.js";
import './App.css';

function App() {
  

  
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/content">Content</Link>
      </nav>
      <div>
        <Route path='/' exact>
          <h1>HOME PATH</h1>
        </Route>
        <Route path='/content' exact>
          <h1>CONTENT PATH</h1>
          <Content />
        </Route>
        <Route path='/:id' exact>
          <ShowContent />
        </Route>
      </div>
    </div>
  );
}

export default App;
