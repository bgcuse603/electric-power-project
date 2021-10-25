// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactPlayer from 'react-player';
import { Link, Route } from "react-router-dom";
import Content from './components/Content.js';
import ShowContent from "./components/ShowContent.js";
import ShowComments from "./components/ShowComments.js";
import QuestionForm from "./components/QuestionForm.js";
import './App.css';

function App() {
  

  
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/question">Question</Link>
      </nav>
      <div>
        <Route path='/' exact>
          <h1>HOME PATH</h1>
          <Content />
        </Route>
    
        <Route path='/individual/:id'>
          <ShowContent />
          <ShowComments />
        </Route>

        <Route path='/question'>
          <h1>question</h1>
          <QuestionForm />
        </Route>
      </div>
    </div>
  );
}

export default App;
