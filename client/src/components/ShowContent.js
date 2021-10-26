import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

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
  let mediatype = '';
  let medialink = '';

  if (contents.length === 0) {
    title = 'loading';
    source = 'loading';
    body = 'loading';
    mediatype = 'loading';
    medialink = 'loading';
  } else {
    title = contents.fields.title;
    source = contents.fields.source;
    body = contents.fields.content;
    mediatype = contents.fields.mediatype;
    medialink = contents.fields.medialink;
  }

  console.log(mediatype);
  console.log(medialink);

  return (
    <div>
      <h1>{title}</h1>
      <img
        src={medialink}
        alt=""
        style={mediatype !== 'video' ? {display:'block'} : {display:'none'} }
      />
      <ReactPlayer
        url={medialink}
        alt=""
        style={mediatype === 'video' ? { display: 'block' } : { display: 'none' }}
      />
      {/* <script
        src="https://www.buzzsprout.com/1740726/9436340-intro.js?container_id=buzzsprout-player-9436340&player=small" type="text/javascript"
        charset="utf-8"
        style={mediatype === 'podcast' ? { display: 'block' } : { display: 'none' }}
      ></script> */}
      <p>{body}</p>
      <h3>Source: {source}</h3>
    </div>
  )
}

export default ShowContent;
