import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ShowContent = () => {
  const [contents, setContents] = useState([]);
  const recordId = useParams();

  useEffect(() => {
    async function apiCall() {
      const APIUrl = 'https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content/';
      const apiKey = '/?api_key=keymXba1arq3mAVA3';

      const contentURL = (`${APIUrl}${recordId.id}${apiKey}`);
      const response = await axios.get(contentURL);
      setContents(response.data);
    }
    apiCall();
  }, []);

  let title = '';
  let source = '';
  let body = '';

  if (contents.length === 0) {
    title = 'loading';
    source = 'loading';
    body = 'loading';
  } else {
    title = contents.fields.title;
    source = contents.fields.source;
    body = contents.fields.content;
  }

  return (
    <div>
      <h1>Product</h1>
      <h1>{title}</h1>
      <h3>{source}</h3>
      <p>{body}</p>

    </div>
  )
}

export default ShowContent;
