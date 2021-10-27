import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Content = () => {
  const [contents, setContents] = useState([]);
  const [showMore, setShowMore] = useState(false);
  let displayLinks = '';
  let displayButton = 'Show More';
    
  useEffect(() => {
    async function apiCall() {
      const contentURL = "https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content?api_key=keymXba1arq3mAVA3";
      const response = await axios.get(contentURL);

      setContents(response.data.records);
    }
    apiCall();
  }, []);

  const handleButton = () => {
    setShowMore(!showMore);
  }

  if (showMore === true) {
    displayLinks = 'topicLinksAll';
    displayButton = 'Show Less';
  } else {
    displayLinks = 'topicLinksLimited';
    displayButton = 'Show More';
  }



  return (
    <div>
      <h3> Available Topics </h3>
      <ul className={`${displayLinks}`}>
      {contents.map((content) => (
        <Link to={`/individual/${content.id}`} key={content.id}>{content.fields.title}</Link>
      ))} 
      </ul>
      <button onClick={handleButton}>{`${displayButton}`}</button>
    </div>
  )
}

export default Content;