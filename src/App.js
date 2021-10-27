// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactPlayer from 'react-player';
import { Link, Route } from "react-router-dom";
import Content from './components/Content.js';
import ShowContent from "./components/ShowContent.js";
import ShowComments from "./components/ShowComments.js";
import QuestionForm from "./components/QuestionForm.js";
import SearchBar from "./components/SearchBar.js";
import Search from "./components/Search.js";
import About from "./components/About.js"
import Footer from "./components/Footer.js"
import './App.css';

function App() {
  console.log(`${process.env.REACT_APP_API_KEY}`);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/question">Question</Link>
      </nav>
      <div>
        <Route path='/' exact>
          <div className="header">
            <img src="eppLogoWhite-cropped.jpeg" alt="logo" className="logo-home"/>
          </div>
          <About />
          <SearchBar />
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
        
        <Route path='/search/:term'>
          <Search />
        </Route>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
