import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Content = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    async function apiCall() {
      const contentURL = "https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content?api_key=keymXba1arq3mAVA3";
      const response = await axios.get(contentURL);
      // console.log(response.data.records);
      setContents(response.data.records);
    }
    apiCall();
  }, []);

  // console.log('contents');
  // console.log(contents);

  return (
    <div>
      <h1> content function </h1>
      <ul>
      {contents.map((content) => (
        // <h2 key={content.id}> {content.fields.name}</h2>
        <Link to={`/individual/${content.id}`} key={content.id}>{content.fields.title}</Link>
      ))} 
    </ul>
    </div>
  )
}

export default Content;