import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ShowContent = () => {
  const [contents, setContents] = useState([]);
  const recordId = useParams();
  console.log('im in show content');
  console.log(`${recordId.id}`);

  useEffect(() => {
    async function apiCall() {
      const APIUrl = 'https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content/';
      const apiKey = '/?api_key=keymXba1arq3mAVA3';

      const contentURL = (`${APIUrl}${recordId.id}${apiKey}`);
      const response = await axios.get(contentURL);
      console.log(response.data);
      setContents(response.data);
    }
    apiCall();
  }, []);

  console.log('single content display');
  console.log(contents);
  // console.log(`${contents ? contents.fields.title : null}`);
  // console.log(`${contents ? contents.fields.source : null}`);
  // console.log(`${contents ? contents.fields.contents : null}`);
  return (
    <div>
      <h1>{contents ? contents.fields.title : null}</h1>
      {/* <h3>{contents ? contents.fields.source : null}</h3> */}
      {/* <p>{contents ? contents.fields.content : null}</p> */}
      
    </div>
  )
}

export default ShowContent;
