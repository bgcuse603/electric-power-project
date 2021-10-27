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

  // let key = '';
  let title = '';
  let source = '';
  let body = '';
  let mediatype = '';
  let medialink = '';
  // console.log(key);

  if (contents.length === 0) {
    // key = 0;
    title = 'loading';
    source = 'loading';
    body = 'loading';
    mediatype = 'written';
    medialink = 'https://i.imgur.com/cj4tNXP.jpg';
  } else {
    // key = contents.id;
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
      {/* <iframe
        src={`${medialink}?client_source=small_player&iframe=true`}
        loading="lazy"
        // width="100%"
        // height="200"
        // frameborder="0"
        // scrolling="no"
        title={`${title}`}
        // key={key}
      style={mediatype === 'listen' ? { display: 'block' } : { display: 'none' }} 
      >
        </iframe> */}
      <p>{body}</p>
      <h3>Source: {source}</h3>
    </div>
  )
}

export default ShowContent;
