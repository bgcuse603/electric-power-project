import { useState } from 'react';
import Search from './Search.js;'

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  // const [toggleFetch, setToggleFetch] = useState(true);

  // const handlePostRequest = async (ev) => {
  //   ev.preventDefault();
  //   console.log('POST');
  //   const newQuestion = {
  //     records: [
  //       {
  //         fields: {
  //           yourname,
  //           email,
  //           question
  //         }
  //       }
  //     ]
  //   }
  //   await axios.post(API_URL, newQuestion);
  //   setToggleFetch(!toggleFetch);
  // }

  const handleSubmit = (ev) => {
    <Search
      searchTerm={searchTerm}
    />
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search: </label>
          <input type="text" id="search" onChange={(ev) => setSearchTerm(ev.target.value)} />
        <br />
          <input type="submit" />
        </form>
    </div>
  )
}
export default SearchBar;

// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";

const Search = ({searchTerm}) => {
  // const [contents, setContents] = useState([]);

  // useEffect(() => {
  //   async function apiCall() {
  //     const contentURL = "https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content?api_key=keymXba1arq3mAVA3";
  //     const response = await axios.get(contentURL);

  //     setContents(response.data.records);
  //   }
  //   apiCall();
  // }, []);
  console.log('in search');
  console.log(searchTerm);
  
  return (
    <div>
      <h1> Search Results </h1>
      {/* <ul>
      {contents.map((content) => (
        <Link to={`/individual/${content.id}`} key={content.id}>{content.fields.title}</Link>
      ))} 
    </ul> */}
    </div>
  )
}

export default Search;

"id": "rec08BMxF12Lw1bvs",
        "fields": {
            "content": "The Power Systems Experience Center (PSEC) shows high resistance grounding vs ungrounded systems for electrical safety, power quality, fault current reduction and fault tracking for process industries and data centers to allow a “free ground fault”.",
            "source": "Eaton Power Systems Experience Center (eaton.com/experience)",
            "medialink": "https://youtu.be/q-ElaHdpryI",
            "posttype": "watch",
            "title": "High Resistance Grounding HRG",
            "mediatype": "video"
        },
        "createdTime": "2021-10-26T02:24:47.000Z"