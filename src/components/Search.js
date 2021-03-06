import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar';

let j = 0;
let title = '';
let check = '';
let i;


const Search = () => {
  const [contents, setContents] = useState([]);
  const searchTerm = useParams();
  let queryTerm = (searchTerm.term).toLowerCase();

  const contentLinkStyle = {
    color: "black",
    textDecoration: "underline",
    textDecorationColor: "#D1A10C",
    
  };

  useEffect(() => {
    async function apiCall() {
      const contentURL = "https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content?api_key=keymXba1arq3mAVA3";
      const response = await axios.get(contentURL);
      setContents(response.data.records);
    }
    apiCall();
  }, []);

  let searchResults = [];

  const handleTitle = () => {
    if (contents[i].fields.title) {
      title = contents[i].fields.title.toLowerCase();
      return title;
    } else {
      return title;
    }        
  }

  const handleCheck = () => {
    check = title.includes(queryTerm);
    return check;
  }
  
  if (contents.length !== 0) {
    for (i = 0; i < contents.length; i++) {

      handleTitle();

      handleCheck();

      if (check === true) {
        console.log(`${title}`);
        console.log(`Search Term: ${queryTerm}`);
        console.log(`Index: ${i} Check: ${check}`);
        searchResults[j] = contents[i];
        j++;
      }
    }
  }
  else {
    searchResults = [
      {
        "id": "loading",
        "fields": {
            "content": "loading",
            "source": "loading",
            "medialink": "loading",
            "posttype": "loading",
            "title": "loading",
            "mediatype": "loading"
        },
        "createdTime": "loading"
      },
    ];
  }


  console.log(searchResults);

  return (
    <div>
      <h1> Search Results for: </h1>
      <div className="searchDiv">
      <h2>{`${searchTerm.term}`}</h2>
      <ul className="searchDisplay">
      {searchResults.map((result) => (
        <Link to={`/individual/${result.id}`} style={contentLinkStyle} key={result.id}>{result.fields.title}</Link>
      ))} 
      </ul>
      <h5> Not what you were looking for? </h5>
      </div>
      <SearchBar />
    </div>
  )
}

export default Search;

