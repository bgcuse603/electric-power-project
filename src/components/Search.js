import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Search = () => {
  const [contents, setContents] = useState([]);
  
  const searchTerm = useParams();

  console.log('in search');
  console.log(searchTerm.term);

  useEffect(() => {
    async function apiCall() {
      const contentURL = "https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content?api_key=keymXba1arq3mAVA3";
      const response = await axios.get(contentURL);

      setContents(response.data.records);
    }
    apiCall();
  }, []);

  console.log(contents);

  let searchResults = [];
  if (contents.length !== 0) {
    let j = 0;
    for (let i = 0; i < contents.length; i++) {

      let array = (contents[i].fields.title).toLowerCase();
      let queryTerm = (searchTerm.term).toLowerCase();
      let check = array.includes(queryTerm);
     
      if (check === true) {
        console.log(`${array}`);
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
      <h1> Search Results for: {`${searchTerm.term}`} </h1>
      <ul>
      {searchResults.map((results) => (
        <Link to={`/individual/${results.id}`} key={results.id}>{results.fields.title}</Link>
      ))} 
    </ul>
    </div>
  )
}

export default Search;

