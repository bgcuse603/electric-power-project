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
      <header>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/question">question</Link>
        </nav>
      </header>

      <main>
        <Route path='/' exact>
          <div className="header">
            <img src="eppLogoWhite-cropped.jpeg" alt="logo" className="logo-home" />
          </div>
          <div>
            <p>The Electric Power Project (EPP) is a repository of information for the electrical industry. </p>
          </div>
          <div className="searchBar">
            <SearchBar />
          </div>
          <div className="content-home">
            <Content />
          </div>
        </Route>

        <Route path='/about'>
            <About />
        </Route>

        <Route path='/individual/:id'>
          <ShowContent />
          <ShowComments />
        </Route>

        <Route path='/question'>
          <QuestionForm />
        </Route>

        <Route path='/search/:term'>
          <Search />
        </Route>

      </main>
      <footer>
        <div className="footer">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
