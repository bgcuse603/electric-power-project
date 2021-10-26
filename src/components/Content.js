import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Content = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    async function apiCall() {
      const contentURL = "https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content?api_key=keymXba1arq3mAVA3";
      const response = await axios.get(contentURL);

      setContents(response.data.records);
    }
    apiCall();
  }, []);

  return (
    <div>
      <h2> Available Topics: </h2>
      <ul>
      {contents.map((content) => (
        <Link to={`/individual/${content.id}`} key={content.id}>{content.fields.title}</Link>
      ))} 
    </ul>
    </div>
  )
}

export default Content;