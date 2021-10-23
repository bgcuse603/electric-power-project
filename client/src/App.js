import { useState, useEffect } from 'react';
import axios  from 'axios';
import './App.css';

function App() {
  
  const [contents, setContents] = useState();
 
  const getContent = async () => {
    const resp = await axios.get('https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content?api_key=keymXba1arq3mAVA3');
    setContents(resp.data.records);
  }

  useEffect(() => {
    getContent();
  }, []);
  console.log(contents);
  
  return (
    <div className="App">
      <h1>TEST</h1>
      {contents.map((content) =>
          <h2 key={content.id}> Content: {content.fields.content}</h2>
      )}
      
    </div>
  );
}

export default App;
