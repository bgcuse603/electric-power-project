import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';


const APIUrl = 'https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content/';
const apiKey = '/?api_key=keymXba1arq3mAVA3';

const ShowContent = () => {
  const [contents, setContents] = useState([]);
  const recordId = useParams();
  

  useEffect(() => {
    async function apiCall() {
      const contentURL = (`${APIUrl}${recordId.id}${apiKey}`);
      const response = await axios.get(contentURL);
      setContents(response.data);
    }
    apiCall();
  }, [recordId]);

  let title = '';
  let source = '';
  let body = '';
  let mediatype = '';
  let medialink = '';

  if (contents.length === 0) {
    title = 'loading';
    source = 'loading';
    body = 'loading';
    mediatype = 'written';
    medialink = 'https://i.imgur.com/cj4tNXP.jpg';
  } else {
    title = contents.fields.title;
    source = contents.fields.source;
    body = contents.fields.content;
    mediatype = contents.fields.mediatype;
    medialink = contents.fields.medialink;
  }

  console.log(contents.id);
  // console.log(medialink);

  return (
    <div>
      <h1>{title}</h1>
      <img
        src={medialink}
        alt=""
        style={mediatype === 'written' ? { display: 'block' } : { display: 'none' }}
        className="image-content"
      />
      <ReactPlayer
        url={medialink}
        alt=""
        style={mediatype === 'video' ? { display: 'block' } : { display: 'none' }}
        className="react-player"
        width='100%'
      />
      <h4>sourced by  </h4>
      <h5>{source}</h5>
      <br />
      <p>{body}</p>
    </div>
  )
}

export default ShowContent;
