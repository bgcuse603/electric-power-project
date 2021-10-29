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
  const navLinkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "3vh",
    fontFamily: "Chakra Petch",
  };

  return (
    <div>
      <header>
        <div className="header">
          <img src="eppLogoWhite-cropped.jpeg" alt="logo" className="logo-home" />
        </div>
        <nav>
          <Link to="/" style={navLinkStyle}>home</Link>
          <Link to="/about" style={navLinkStyle}>about</Link>
          <Link to="/question" style={navLinkStyle}>question</Link>
        </nav>
      </header>

      <main>
        <Route path='/' exact>
          <div className="content-home">
            <Content />
          </div>
          <div className="searchBar">
            <SearchBar />
          </div>
          <br />
          <br />
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
        <br/>
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
