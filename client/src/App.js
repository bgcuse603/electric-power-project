import { useState, useEffect } from 'react';
import axios  from 'axios';
import './App.css';

function App() {
  
  const [content, setContent] = useState();
 
  const getContent = async () => {
    const resp = await axios.get('https://api.airtable.com/v0/appfMQimLWOpFJ1a4/content?api_key=keymXba1arq3mAVA3');
    setContent(resp.data);
  }

  useEffect(() => {
    getContent();
  }, []);
  console.log(content);

  return (
    <div className="App">
      <h1>TEST</h1>
      
    </div>
  );
}

export default App;
