import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



const Content = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    async function apiCall() {
      const contentURL = "https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content?api_key=keymXba1arq3mAVA3";
      const response = await axios.get(contentURL);

      console.log(response.data.records);
      // const contentList = Object.keys(response.data.records);
      // console.log(contentList);
      setContents(response.data.records);

      // const contentListLinks = [];

      // for (let i = 0; i < contentList.length; i++) {
      //   console.log(`${i}: ${contentList[i]}`);
      //   // contentListLinks.push(content)
      // }

    }
    apiCall();
  }, []);
  console.log('contents');
  console.log(contents);

  return (
    <div>
      <h1> content function </h1>
      <ul>
      {contents.map((content) => (
        // <h2 key={content.id}> {content.fields.name}</h2>
        <Link to={`/${content.fields.name}`} key={content.id}>{content.fields.title}</Link>
      ))} 
    </ul>
    </div>
  )
}

export default Content;