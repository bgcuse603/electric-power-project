import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Content = () => {
  const [contents, setContents] = useState([]);
  const [showMore, setShowMore] = useState(false);
  let displayLinks = '';
  let displayButton = 'Show More';
  const contentLinkStyle = {
    color: "black",
    textDecoration: "underline",
    textDecorationColor: "#D1A10C",
    
  };
    
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
    displayButton = 'show less';
  } else {
    displayLinks = 'topicLinksLimited';
    displayButton = 'show more';
  }

  return (
    <div className="topics">
      <h3> available topics </h3>
      <ul className={`${displayLinks}`}>
      {contents.map((content) => (
        <Link to={`/individual/${content.id}`} key={content.id} style={contentLinkStyle}>{content.fields.title}</Link>
      ))} 
      </ul>
      <br />
      <div className="buttonDiv">
          <br />
          <br />
          <br />
        <button onClick={handleButton}>{`${displayButton}`}</button>
          <br />
          <br />
          <br />
      </div>
      
    </div>
  )
}

export default Content;